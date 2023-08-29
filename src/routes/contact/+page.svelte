<script>
	import Navbar from '../../lib/components/nav/navbar.svelte';
	import PageWrapper from '../../lib/components/page/page-wrapper.svelte';
</script>

<Navbar />
<PageWrapper>
	<div class="flex flex-col lg:flex-row gap-8 mt-10">
		<div class="md:w-2/3 lg:w-1/3 flex justify-center flex-col gap-2 md:gap-8">
			<p class="text-4xl font-semibold">Contact us</p>
			<p class="text-dark-500">
				The harder you work for something, the greater you'll feel when you achieve it
			</p>
			<form class="flex flex-col gap-4 md:gap-8" action="">
				<div class="flex gap-10">
					<input
						required
						class="w-full border-2 rounded-lg p-2"
						placeholder="Your name"
						type="text"
						name=""
						id=""
					/>
					<input
						required
						class="w-full border-2 rounded-lg p-2"
						placeholder="Email"
						type="text"
						name=""
						id=""
					/>
				</div>
				<input
					required
					class="w-full border-2 rounded-lg p-2"
					placeholder="Leave a message"
					type="text"
					name=""
					id=""
				/>
				<div>
					<button class="bg-blue-400 rounded-xl text-white py-4 px-8">Send a Message</button>
				</div>
			</form>
		</div>
		<div class="flex-1 rounded-xl overflow-hidden">
			<iframe
				class="w-full"
				title="GoogleMaps"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2296.5890120718527!2d27.212232886703!3d35.50755866512372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1693307922718!5m2!1sen!2sno"
				width="500"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
</PageWrapper>
