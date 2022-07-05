<script>
	import { page } from '$app/stores';
  import Footer from '../components/Footer.svelte';
  import TopNav from '../components/TopNav.svelte';
  import '../app.css';

  import { session } from '$app/stores';
	import { auth, setAuthCookie, unsetAuthCookie } from '$lib/supabase-db';

  auth.onAuthStateChange(async (event, _session) => {
		if (event !== 'SIGNED_OUT') {
			await setAuthCookie(_session);
			session.set({ user: _session.user, authenticated: !!_session.user });
		} else {
			session.set({ user: undefined, authenticated: false });
			await unsetAuthCookie();
		}
	});

  
  // we are setting the context of user here. If logged in , we will be assigning the current session in our svelte store (svelte's way of handling local storage to the currently signed in user. We will also be adding our method for signing out here. This will make sure that our user is signing in and logging our from the same source of our entire application)



</script>

{#if $page.url.pathname === '/testingplayground'}
  <slot />
{:else}
  <div class="">
    <div class="sticky top-0 left-0 right-0 z-50">
      <TopNav />
    </div>
    <slot />
    <Footer />
  </div>
{/if}
