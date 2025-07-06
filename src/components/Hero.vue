<script setup>
import { ref } from "vue";
import product31 from "./../assets/img/product3-1.png";
import product32 from "./../assets/img/product3-2.png";
import product33 from "./../assets/img/product3-3.png";

defineProps({});
</script>

<template>
  <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img class="img-fluid" :src="product33" alt="" />
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left">
                <h1 class="h1">Red Heart Aroma</h1>
                <h3 class="h2">Simple. Elegant. Scented. Full of love</h3>
                <p>
                  Light up love with our charming red heart candle, hand-poured with natural soy wax into a clear, stylish glass jar. Inside, a bright red heart rests at the center — a beautiful surprise that slowly reveals itself as the candle melts. Crafted with care, this candle is eco-friendly, smoke-free, and perfect for setting a cozy, romantic vibe. Whether it’s a gift or a treat for yourself, it adds a warm glow and a heartfelt touch to any space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img class="img-fluid" :src="product32" alt="" />
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left">
                <h3 class="h2">Floral. Fragrant. Naturally beautiful.</h3>
                <p>
                  Discover our handcrafted blue soy wax candles, delicately infused with floral designs and made from 100% natural, eco-friendly ingredients. Each candle is thoughtfully created to bring beauty, calm, and a clean burn into your space. The soothing blue hue and intricate flower details add a touch of elegance to any room, making them perfect for gifting or self-care rituals. Free from toxins and paraffin, our candles offer a pure and long-lasting fragrance experience.
                  <br>
                  <strong>Handmade with love. Inspired by nature. Designed to glow.</strong> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img class="img-fluid" :src="product31" alt="" />
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left align-self-center">
                <h1 class="h1"><b>Infused Candles</b></h1>
                <h3 class="h2">Where luxury meets affordability</h3>
                <p>
                  These are more than just a source of light—they are a gateway to unparalleled
                  ambiance and sophistication. Crafted with precision and care, each candle is
                  infused with premium fragrances that transport you to serene gardens, exotic
                  destinations, or cozy evenings by the fire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev text-decoration-none w-auto ps-3"
      href="#template-mo-zay-hero-carousel"
      role="button"
      data-bs-slide="prev"
    >
      <i class="fas fa-chevron-left"></i>
    </a>
    <a
      class="carousel-control-next text-decoration-none w-auto pe-3"
      href="#template-mo-zay-hero-carousel"
      role="button"
      data-bs-slide="next"
    >
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</template>
