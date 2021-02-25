class FollowToggle {
    $followBtn = $('.follow-toggle')
    constructor() {
        this.userID = $('.follow-toggle').data('user-id');
        this.followState = $('.follow-toggle').data('initial-follow-state');
        this.render();
    };

    render() {
        if (this.followState === 'unfollowed') {
            this.$followBtn.text('Follow')
        } else if (this.followState === 'followed') {
            this.$followBtn.text('Unfollow')
        }
    };
};

module.exports = FollowToggle;