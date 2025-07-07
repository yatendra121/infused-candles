<script setup>
import { ref } from 'vue'
import product1 from './../assets/img/product1-2.jpg'
import product2 from './../assets/img/product2-1.jpg'
import product3 from './../assets/img/product3-1.webp'

defineProps({
})

</script>
<template>
     <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories of The Month</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img :src="product1" class="rounded-circle img-fluid border"></a>
                <h5 class="text-center mt-3 mb-3">Glass Jar Candles</h5>
                <p class="text-center"><a class="btn btn-success" href="/shop">Go Shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img :src="product2" class="rounded-circle img-fluid border"></a>
                <h2 class="h5 text-center mt-3 mb-3">Ceramic Jar</h2>
                <p class="text-center"><a class="btn btn-success" href="/shop">Go Shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img :src="product3" class="rounded-circle img-fluid border"></a>
                <h2 class="h5 text-center mt-3 mb-3">Bell Jar Candle</h2>
                <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
            </div>
        </div>
    </section>
</template>