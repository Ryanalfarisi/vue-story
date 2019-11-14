<template>
  <div>
    <aside class="left-sidebar">
      <a href="#" id="dashboard" class="active"><h2>Dashboard</h2></a>
      <div class="scroll-sidebar">
        <nav class="sidebar-nav">
          <ul id="sidebarnav">
            <li ><a href="#">
              <p>Components</p></a>
              <ul class="submenu-nav">
                <li>Badge</li>
                <li>Box</li>
              </ul>
              
            </li>
            <li><a href="#"><p>Inputs</p></a></li>
            <li><a href="#"><p>Selections</p></a></li>
            <li><a href="#"><p>Paginations</p></a></li>
            <li><a href="#"><p>Page Layout</p></a></li>
            <li><a href="#"><p>Menu</p></a></li>
          </ul>
        </nav>
        <div class="search">
          <form>
            <img src="../assets//magnifying-glass.svg"/>
            <input type="search">
          </form>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'typenav',
  };
</script>