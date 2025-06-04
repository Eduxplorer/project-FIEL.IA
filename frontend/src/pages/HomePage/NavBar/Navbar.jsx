import "./NavBar.css"

const NavBar = () =>
    {
        return (
            <div class="nav">
  <div class="nav-container">
    <div class="btn">Home</div>
    <div class="btn">Contact</div>
    <div class="btn">About</div>
    <div class="btn">FAQ</div>
    <svg
      class="outline"
      overflow="visible"
      width="100%"
      height="60"
      viewBox="0 0 100% 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"


    >
      <rect
        class="rect"
        pathLength="100"
        x="0"
        y="0"
        width="100%"
        height="60"
        fill="transparent"
        stroke-width="5"
      ></rect>
    </svg>
  </div>
</div>
        );
}

export default NavBar;