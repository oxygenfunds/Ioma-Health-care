"use script"
console.log('testing');

document.addEventListener("DOMContentLoaded", () => {


    const Swiper  = new Swiper("#doctorSlider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // Autoplay settings
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // Pagination dots
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Optional: Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const email = document.getElementById("email") 

     const isValidemail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    if (email === '') {
            setError(email, 'Email is required');
        } else if (!isValidemail(email)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

        document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple visual feedback
        const btn  = document.querySelector('.submit-full');
        btn.innerText = "Sending...";
        btn.style.opacity = "0.7";
        

        setTimeout(() => {
            alert("Thank you! Your appointment request has been sent. We will contact you shortly.");
            this.reset();
            btn.innerText = "Submit Request";
            btn.style.opacity = "1";
        }, 1500);

        
    });




    










    
})

// DELETE 















