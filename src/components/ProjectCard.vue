<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card mt-4">
        <div class="card-body">
            <h4 class="card-title">{{ project.title }}</h4>
            <p class="card-text">{{ project.content }}</p>
            <a class="btn btn-primary" href="">Leggi</a>
        </div>
    </div>
</template>