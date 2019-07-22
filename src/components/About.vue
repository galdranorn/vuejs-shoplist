<template>
    <div class="about">
        <h1>About the project</h1>
        <p>Hello {{ name }}!</p>
        <p>This is simple project to learn fundamentals of Vue.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: this.$route.params.name
        }
    }
}
</script>