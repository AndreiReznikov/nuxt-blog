<template>
  <div class="comment">
    <p class="comment-text">{{ comment?.text }}</p>
    <div class="commentInfo">
      <span class="commentAuthor"> {{ comment?.author?.name }} </span>
      <span class="commentDate">
        {{ comment?.creationDate }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  comment: Object,
});
</script>

<style scoped>
.comment {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  border: 1px solid white;
}

.commentText {
  width: 100%;
}

.commentInfo {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
