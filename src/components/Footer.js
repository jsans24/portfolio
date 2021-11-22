import React from 'react';

const Footer = (props) => {
  return (
    <footer>
		<div className="wrap">
			<div className="social-links">
				<a target="_blank" href="https://github.com/jsans24"><i class="fab fa-github-square"></i></a>
				<a target="_blank" href="https://www.linkedin.com/in/josua-sanford/"><i class="fab fa-linkedin"></i></a>
			</div>
		</div>

		<p className="copyright">&copy;2021 Josua Sanford</p>
	</footer>
  )
}

export default Footer