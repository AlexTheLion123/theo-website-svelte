<script>
	import { onMount } from "svelte";

	let menuItems = [{label: "Home"}, {label:"Courses"}, {label:"Team"}, {label:"About"},{label:"Contact"}]
	let current="Home";
	let showMobileMenu = false;
	let menuIn = false;

	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	const mediaQueryHandler = e => { // whether to show icon or not
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	const slideMenu = () => { // whether to show menu or not
		const ul = document.querySelector('ul');
		!menuIn ? ul.style.left = '0' : ul.style.left = '-100%';
	}

	onMount(() => {
		const mediaListener = window.matchMedia("(max-width: 767px)");
		mediaListener.addListener(mediaQueryHandler);
	});
</script>


<nav>
	<div class="container">
		<div class="container-wrap">
			<div class="logo">EPIC ICT TRAINING CENTRE</div>

			<i 
				class="fas fa-bars"
				on:click={() => {
					menuIn = !menuIn;
					slideMenu()	
				} }
			></i>
				
			<ul>
				{#each menuItems as item}
					<li>
						<a href="nowhere.html"
							class:active={current===item.label}
							on:click|preventDefault={()=>{
								return current = item.label;
							}}
						>{item.label}
						</a>
					</li>
				{/each}
			</ul>
	
			<div class="heading">{current}</div>
		</div>
		
	</div>
</nav>

<style lang="scss">
	nav {
		height: 300px;
		background: url('../images/sub_visual.jpg') no-repeat center;
		background-size: cover;

		ul {
			display: flex;
			list-style: none;
			z-index: 3;

			li {
				margin: 0 5px;

				a {
					color: #fff;
					text-decoration: none;
					font-size: 18px;
					font-weight: 500;
					letter-spacing: 1px;
					padding: 8px 10px;
					border-radius: 5px;
					transition: all 0.3s ease;
				}
				a:hover,
				a.active{
						color: #1b1b1b;
						background: #fff;
				}
			}
		}

		.logo {
			font-size: 22px;
			color: #fff;
			font-weight: 600;
		}

		div.heading {
			color: white;
			font-weight: 500;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: 5vh;
			width: 100%;
			text-align: center;

			bottom: 100px;
			font-size: 50px;
			line-height: 32px;
		}
		.lo i {
			padding: 20px;
			font-size: 30px;
		}

	 i { 
			color: #fff;
			font-size: 22px;
			cursor: pointer;
			display: none;
		}

		@media (max-width: 950px){
		 	i{
				display: block;
			}
			
			ul {
				position: fixed;
				top: 80px;
				left: -100%;
				background: #111;
				height: 100vh;
				width: 100%;
				display: block;
				text-align: center;
				transition: all 0.3s ease;

				li {
					margin: 40px 0;

					a {
						font-size: 20px;

						&:hover,
						.active {
							color: cyan;
							background: none;
						}
					}
				}
			}
		}

		@media (max-width: 767px) {
			height: 160px;
			
			div.heading {
				bottom: 50px;
				font-size: 33px;
				line-height: 32px;
			}
		}

		@media (max-width: 575px){
			height: 160px;

			.logo, ul, i {
				padding: 20px;
				font-size: 20px;
			}

			div.heading {
				bottom: 40px;
				font-size: 30px;
				line-height: 32px;
			}
		}
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		height: 100%;
	}

	div .container-wrap {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		position: relative;
		height: 100%;
		padding: 20px;
	}

	// .btn {
	// 	padding: 5px 15px;
	// 	cursor: pointer;
	// 	font-size: 14px;
	// 	font-weight: 500;
	// 	border: 0;
	// 	outline:0;
	// }
	

	




</style>