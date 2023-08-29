<script>
	import Banner from '../../lib/components/banner/banner.svelte';
	import Navbar from '../../lib/components/nav/navbar.svelte';
	import PageWrapper from '../../lib/components/page/page-wrapper.svelte';
	import Testimonials from '../../lib/components/testimonials/testimonials.svelte';

	import ourMission from '../../lib/assets/stock-photos/mission.jpg';
	import ourStory from '../../lib/assets/stock-photos/story.jpg';
</script>

<Navbar />
<p class="text-4xl font-semibold my-10">About Us</p>
<Banner
	img={ourStory}
	headline="Our Story"
	content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ipsum consequuntur, error eligendi voluptas ratione quibusdam odit sint pariatur exercitationem. Accusamus suscipit nihil porro minus et totam accusantium eaque natus, illo expedita doloremque odio optio ducimus, cupiditate rem nobis, voluptatibus excepturi adipisci fuga necessitatibus rerum voluptatem. Neque, earum alias. Itaque natus officia fuga consequuntur adipisci non saepe excepturi doloribus optio quis dicta totam tempora, quod sapiente dolorum officiis at facilis? Illo blanditiis laborum dolorem mollitia eligendi consequatur quis expedita quasi."
/>
<Banner img={ourMission} headline="Our Mission" flip="true" />
<PageWrapper>
	<Testimonials />
</PageWrapper>
