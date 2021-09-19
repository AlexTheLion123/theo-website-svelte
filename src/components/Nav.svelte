<script>

</script>


<nav>
	<div class="container">
		<div class="container-wrap">
			<div class="logo">EPIC ICT TRAINING CENTRE</div>
			<input type="checkbox" id="click">
			<label for="click" class="menu-btn">
				<i class="fas fa-bars"></i>
			</label>
				
			<ul>
				<li><a class='active' href="index.html">Home</a></li>
				<li><a href="courses.html">Courses</a></li>
				<li><a href="team.html">Team</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
	
			<div class="heading">HOME</div>
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

					&:hover,
					a.active{
						color: #1b1b1b;
						background: #fff;
					}
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
		.logo, ul, .menu-btn i {
			padding: 20px;
			font-size: 30px;
		}

		.menu-btn i { 
			color: #fff;
			font-size: 22px;
			cursor: pointer;
			display: none;
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
	}

	.btn {
		padding: 5px 15px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		border: 0;
		outline:0;
	}
	
	#click{
		display: none;
	}

	

</style>