import icsToJson from 'ics-to-json'

window.googlecalendar = function () {
    return {
        events: null,
        isLoading: false,

        fetchCalendar() {
            this.isLoading = true
            const dateNow = new Date()
            const formattedDateNow = dateNow.toISOString()
            fetch(
                `https://www.googleapis.com/calendar/v3/calendars/eastmarshunited.org_b4a399aqu6j4jj3hq9jogdejdg@group.calendar.google.com/events?maxResults=3&timeMin=${formattedDateNow}&orderBy=startTime&singleEvents=true&key=AIzaSyBMCMV4gOpk_1lLXB4gSw9EMHbiVC60_Vw`
            )
                .then((res) => res.json())
                .then((data) => {
                    this.isLoading = false
                    this.events = data.items
                })
        }
    }
}
