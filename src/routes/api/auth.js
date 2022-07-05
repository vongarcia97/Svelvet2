import { getCookie, blankCookies } from '$lib/auth';

export async function post({ request }) {
	let body = await request.json();
	let session = body.session;

	let setCookie = session
		? [
				getCookie('refresh_token', session['refresh_token'], { maxAge: session['expires_in'] }),
				getCookie('access_token', session['access_token'], { maxAge: session['expires_in'] }),
				getCookie('expires_at', session['expires_at'], { maxAge: session['expires_in'] }),
		  ]
		: blankCookies();

	return {
		status: 200,
		body: null,
		headers: { 'set-cookie': setCookie },
	};
}

export async function get({ request }) {
	const { user, authenticated } = await request.locals;
	// refer hooks to see how this got populated
	return {
		body: { user, authenticated },
	};
}