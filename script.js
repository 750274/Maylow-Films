        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        const productButtons = document.querySelectorAll('.product-button');

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open(
            'https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20insulfilm%20automotivo.',
            '_blank'
        );
    });
});

