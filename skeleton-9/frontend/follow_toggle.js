class FollowToggle {
    $followBtn = $('button.follow-toggle')
    constructor(btn) {
        this.$btn = $(btn)
        this.userID = this.$followBtn.data('user-id');
        this.followState = this.$followBtn.data('initial-follow-state');
        this.render();

        this.$btn.on('click', this.handleClick.bind(this));
    };

    render(btn) {
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