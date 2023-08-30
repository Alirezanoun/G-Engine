const Navbar = `

<nav class="navbar">
	<header class="navbar__toggle__wrapper">
		<div class="navbar__toggle" id="mobile-menu">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
	</header>

	<footer class="navbar__container">
		<ul class="navigation-items">
			<li class="navbar__item">
				<a href="./index.html" class="navbar__links" id="about-page">about</a>
				<ul class="dropdown">
        <li><a href="./whatwedo.html">WHAT WE DO</a></li>
        <li><a href="./location.html">LOCATION</a></li>
        <li><a href="./contact.html">CONTACT</a></li>
       </ul>
			</li>
			<li class="navbar__item">
				<a href="./work.html" class="navbar__links" id="work-page">services</a>
			</li>
		</ul>

		<a class="logo_area" href="./index.html">
			<img src="./img/Untitled design.svg" />
		</a>

		<ul class="navigation-items">
			<li class="navbar__item">
				<a href="https://www.instagram.com/zgraphicals/" target="_blank" class="navbar__links" id="insta">hours</a>
			</li>
			<li class="navbar__item">
				<a href="./book.html" class="navbar__links" id="work-page">book</a>
			</li>
		</ul>
	</footer>
</nav>



`;

export default Navbar;
