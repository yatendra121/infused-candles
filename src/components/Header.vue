<script setup>
import { ref } from 'vue'
import fav from './../assets/img/icon.png'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black shadow sticky-top py-2">
    <div class="container-fluid d-flex justify-content-between align-items-center px-3">

      <!-- Logo + Brand -->
      <div class="d-flex align-items-center">
        <img :src="fav" alt="logo" width="50" height="50" class="me-2" />
        <a class="navbar-brand h5 mb-0 text-white text-decoration-none" href="/">Infused Candles</a>
      </div>

      <!-- Right icons & Toggler -->
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="templatemo_main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>

    <!-- Collapsible Menu -->
    <div class="collapse navbar-collapse" id="templatemo_main_nav">
      <ul class="navbar-nav mx-auto text-center">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/shop">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/contact">Contact</router-link>
        </li>
      </ul>

      <!-- Search bar for mobile -->
      <div class="d-lg-none p-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search..." />
          <span class="input-group-text bg-white">
            <i class="fa fa-fw fa-search text-dark"></i>
          </span>
        </div>
      </div>
    </div>
  </nav>

  <!-- Search Modal -->
  <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="w-100 pt-1 mb-5 text-right">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="modal-content modal-body border-0 p-0">
        <div class="input-group mb-2">
          <input type="text" class="form-control" placeholder="Search..." />
          <button type="submit" class="input-group-text bg-success text-light">
            <i class="fa fa-fw fa-search text-white"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
