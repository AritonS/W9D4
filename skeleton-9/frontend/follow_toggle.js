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

    handleClick(event) {
        event.preventDefault();
        
        if (this.followState === 'unfollowed') {
            return $.ajax({
                method: "POST",
                url: "/users/:id/follow",
                dataType: JSON,
            }) 
        } else if (this.followState === 'followed') {
            return $.ajax({
                method: "DELETE",
                url: "/users/:id/follow",
                dataType: JSON,
            })
        }
    };
};

module.exports = FollowToggle;