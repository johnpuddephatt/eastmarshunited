window.buzzsprout = function () {
    return {
        podcasts: null,
        isLoading: false,
        isPlaying: false,
        currentTrack: null,

        fetchPlaylist() {
            this.isLoading = true
            fetch(`/.netlify/functions/buzzsprout`)
                .then((res) => res.json())
                .then((data) => {
                    this.isLoading = false
                    this.podcasts = data
                })
        },

        toggleAudio(audio) {
            if (this.currentTrack != audio) {
                console.log('changing track')
                // this.$refs.player.src = audio
                this.currentTrack = audio

                this.isPlaying = true
                this.$refs.player.addEventListener('canplay', () => {
                    this.$refs.player.play()
                })
            } else {
                console.log('pausing')
                this.$refs.player.pause()
                this.isPlaying = false
            }
            console.log(this.currentTrack, audio)
        },

        dateInFuture(date) {
            let parsedDate = new Date(date)
            let now = new Date()
            return parsedDate > now ? true : false
        },

        getTime(time) {
            // Hours, minutes and seconds
            var hrs = ~~(time / 3600)
            var mins = ~~((time % 3600) / 60)
            var secs = ~~time % 60

            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = '('
            if (hrs > 0) {
                ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
            }
            ret += '' + mins + ':' + (secs < 10 ? '0' : '')
            ret += '' + secs
            ret += ')'
            return ret
        }
    }
}
