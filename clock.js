class Clock {
    constructor({ template, wrapper }) {
        Object.assign(this, { template, wrapper });
    }
    render() {
        function format(number) {
            return (number < 10) ? `0${number}` : `${number}`;
        }

        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let period = (hours < 12) ? 'AM' : 'PM';

        hours = (hours > 12) ? (12 - hours) : hours;

        this.wrapper.innerHTML = this.template
            .replace('hh', format(hours))
            .replace('mm', format(minutes))
            .replace('ss', format(seconds))
            .replace('pp', period)
    }
    start() {
        this.render();
        this.interval = setInterval(() => this.render(), 1000);
    }
    stop() {
        clearInterval(this.interval);
    }
    pause(delay) {
        clock.stop();
        setTimeout(() => clock.start(), delay);
    }
}