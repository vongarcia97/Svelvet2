<script>
  import Svelvet from '$lib/Containers/Svelvet/index.svelte';
  // import Svelvet from 'svelvet';

  const handleClick = (e) => {
    console.log(e);
  };
  
  let initialNodes = [
    {
      id: 1,
      position: { x: 0, y: 80 },

      data: { label: 'Input Node' },
      width: 100,
      height: 200,
      bgColor: 'white',
      clickCallback: handleClick,
      borderColor: 'transparent',
      image: true,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      sourcePosition: 'right',
    },
    {
      id: 2,
      data: { label: 'Option #1' },
      position: { x: 250, y: 0 },

      width: 175,
      height: 40,
      bgColor: '#B8FFC6',
      borderColor: 'transparent',
      clickCallback: handleClick,
      sourcePosition: 'right',
      targetPosition: 'left'
    },
    {
      id: 3,
      position: { x: 250, y: 260 },
      data: { label: 'Option #2' },
      width: 175,
      height: 40,
      bgColor: '#FFB8B8',
      borderColor: 'transparent',
      clickCallback: handleClick,
      sourcePosition: 'right',
      targetPosition: 'top'
    },
    {
      id: 4,
      position: { x: 500, y: 0 },
      data: { label: 'Output Node' },
      width: 175,
      height: 40,
      bgColor: 'white',
      clickCallback: handleClick,
      sourcePosition: 'right',
      targetPosition: 'left'
    },
    // {
    //   id: 5,
    //   position: { x: 300, y: 200 },
    //   data: { label: 'top' },
    //   width: 175,
    //   height: 40,
    //   bgColor: 'white',
    //   clickCallback: handleClick,
    //   sourcePosition: 'top',
    // }
    // {
    //   id: 6,
    //   position: { x: 400, y: 100 },
    //   data: { label: 'left' },
    //   width: 175,
    //   height: 40,
    //   bgColor: 'white',
    //   clickCallback: handleClick,
    //   targetPosition: 'left'
    // },
    // {
    //   id: 7,
    //   position: { x: 200, y: 100 },
    //   data: { label: 'right' },
    //   width: 175,
    //   height: 40,
    //   bgColor: 'white',
    //   clickCallback: handleClick,
    //   targetPosition: 'right'
    // }
  ];
  let initialEdges = [
    { id: 'e1-2', source: 1, target: 2, type: 'step', label: '  YES  ', animate: true},
    { id: 'e2-3', source: 1, target: 3, type: 'step', label: '  NO  ' },
    { id: 'e2-4', source: 2, target: 4, label: 'test', animate: true },
    { id: 'e2-5', source: 3, target: 4, animate: true },
    // { id: 'e5-6', source: 5, target: 6, animate: true },
    // { id: 'e5-7', source: 5, target: 7, animate: true }
  ];
  let n = 4
	const add_new_node = () => {
		n = n+1
		
		initialNodes = [...initialNodes, {
	    id: n,
	    position: { x: 100 + 20*n, y: 150  },
	    data: { label: `New Node ${n}` },
	    width: 175,
	    height: 40,
	    bgColor: "red"
		}]
		
		initialEdges = [...initialEdges, {
	  	id: `e1-${n}`, source: 1, target: n
		}]
	}
	

  // const otherNodes = [
  //   {
  //     id: 1,
  //     position: { x: 300, y: 50 },
  //     data: { label: 'New Input Node' },
  //     width: 175,
  //     height: 40,
  //     bgColor: 'white',
  //     clickCallback: handleClick,
  //   },
  //   {
  //     id: 2,
  //     position: { x: 125, y: 150 },
  //     data: { label: 'New Option #1' },
  //     width: 175,
  //     height: 40,
  //     bgColor: '#B8FFC6',
  //     borderColor: 'transparent',
  //     clickCallback: handleClick
  //   },
  //   {
  //     id: 3,
  //     position: { x: 475, y: 150 },
  //     data: { label: 'New Option #2' },
  //     width: 175,
  //     height: 40,
  //     bgColor: '#FFB8B8',
  //     borderColor: 'transparent',
  //     clickCallback: handleClick
  //   },
  //   {
  //     id: 4,
  //     position: { x: 300, y: 250 },
  //     data: { label: 'New Output Node' },
  //     width: 175,
  //     height: 40,
  //     bgColor: 'white',
  //     clickCallback: handleClick
  //   }
  // ];
  // const otherEdges = [
  //   { id: 'e1-2', source: 1, target: 2, label: '  Correct  ', animate: true },
  //   { id: 'e2-3', source: 1, target: 3, label: '  Wrong  ', animate: true },
  //   { id: 'e2-4', source: 2, target: 4, noHandle: true },
  //   { id: 'e2-5', source: 3, target: 4, noHandle: true }
  // ];

</script>

<Svelvet nodes={initialNodes} edges={initialEdges} width={600} background />
<!-- <Svelvet nodes={initialNodes} edges={initialEdges} width={600} background /> -->
<button on:click={add_new_node}>
	Add a new Node
</button>
