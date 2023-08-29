<script>
	import TestimonialItem from './testimonial-item.svelte';
	import testimonial1 from '../../assets/stock-photos/testimonial_1.jpg';
	import testimonial2 from '../../assets/stock-photos/testimonial_2.jpg';
	import testimonial3 from '../../assets/stock-photos/testimonial_3.jpg';
</script>

<p class="text-2xl font-semibold my-10">Testimonials</p>
<div class="flex flex-col md:flex-row gap-6">
	<TestimonialItem name="Emily Anderson - Software Developer" img={testimonial1} />
	<TestimonialItem name="Marcus Patel - Graphic Designer" img={testimonial2} />
	<TestimonialItem name="Sofia Rodriguez - Pediatrician" img={testimonial3} />
</div>
