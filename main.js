const submissionComponent = {
  template:
    `  <div style="display: flex; width: 100%">
      <figure class="media-left">
        <div class="image is-64x64">
          <img v-bind:src="submission.submissionImage">
        </div>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ submission.title }}</strong> <small><a v-bind:href="submission.url">{{ submission.url }}</a></small> <small class="tag is-primary">{{ submission.tag }}</small>
            <br>
            {{ submission.description }}
          </p>
          <p>Submitted by: <img class="image is-24x24" v-bind:src="submission.avatar" alt="user photo">
            {{ submission.submitter }}</p>
        </div>
      </div>
      <div class="media-right has-text-centered">
        <button @click="upvote(submission.id)" class="button is-link is-outlined">
          <span class="icon">
            <i class="far fa-thumbs-up"></i>
          </span>
        </button>
        <p class="has-text-link has-text-centered">{{ submission.votes }}</p>
      </div>
    </div>`,
  props: ['submission', 'submissions'],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(submission => submission.id === submissionId);
      submission.votes++;
    }
  }
};


new Vue({
  el: '#app',
  data: {
    submissions: Seed.submissions
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes
      });
    }
  },
  components: {
    'submission-component': submissionComponent
  }
});
