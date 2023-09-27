<template>
    <div>
        <main>
            <div class="wrapper">
                <div class="outer">
                    asdaasasdasdasdasdasdas     
                    <div class="inner"></div>
                </div>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in id quos, est voluptatibus minus porro
                sunt totam quod commodi odit maxime similique, dolorum aut quo atque. Deleniti, voluptas animi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in id quos, est voluptatibus minus porro
                sunt totam quod commodi odit maxime similique, dolorum aut quo atque. Deleniti, voluptas animi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in id quos, est voluptatibus minus porro
                sunt totam quod commodi odit maxime similique, dolorum aut quo atque. Deleniti, voluptas animi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in id quos, est voluptatibus minus porro
                sunt totam quod commodi odit maxime similique, dolorum aut quo atque. Deleniti, voluptas animi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in id quos, est voluptatibus minus porro
                sunt totam quod commodi odit maxime similique, dolorum aut quo atque. Deleniti, voluptas animi.</p>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
div {
    height: 100px;
    width: 100px;
}

.wrapper {
    position: absolute;
}

.outer,
.inner {
    position: relative;
}

.outer::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

.outer {
    background: rgba(255, 0, 0, .5);
}

.inner::before {
    content: 'dasds';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

}

.inner {
    background: rgba(0, 0, 255, .5);
    top: 50px;
    left: 50px;
}

main {
    position: relative;
}</style>