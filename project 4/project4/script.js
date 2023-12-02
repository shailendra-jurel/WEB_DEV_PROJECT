<script>
    document.addEventListener('DOMContentLoaded', function () {
        const leftPanel = document.querySelector('.left-panel');
        const body = document.querySelector('body');

        window.addEventListener('scroll', function () {
            if (window.scrollY > leftPanel.offsetHeight) {
                body.classList.add('scroll');
            } else {
                body.classList.remove('scroll');
            }
        });
    });
</script>
