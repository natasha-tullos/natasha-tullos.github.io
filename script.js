$(document).ready(function() {
    const player = $('#player');
    const gameContainer = $('#game-container');
    const gameArea = $('#game-area');
    const contentArea = $('#content-area');
    const projectilesContainer = $('#projectiles-container');
    const arrowsContainer = $('#arrows-container');
    let playerX = $(window).width() / 2 - 20;
    let playerY = $(window).height() / 2 - 30;
    const step = 5;
    let isJumping = false;
    let isCrouching = false;
    let facingRight = true;
    let movingLeft = false;
    let movingRight = false;
    let movingUp = false;
    let movingDown = false;

    const obstacles = [];
    let gameLoop;
    const sections = ['intro', 'about', 'projects', 'contact'];

    function setInitialPlayerPosition() {
        const introText = $('#intro-text');
        if (introText.length) {
            const introTextRect = introText[0].getBoundingClientRect();
            playerX = introTextRect.left + introTextRect.width / 2 - 20;
            playerY = introTextRect.bottom + 20;
        } else {
            console.log('Intro text not found. Using default position.');
            playerX = 100;
            playerY = 100;
        }
        
        player.css({
            'left': `${playerX}px`,
            'top': `${playerY}px`,
            'display': 'block' // Ensure the player is visible
        });
        updatePlayerPosition();
    }

    function scrollToNextSection() {
        const currentSection = $('.arrow').closest('section');
        const nextSection = currentSection.next('section');
        if (nextSection.length) {
            const sectionLeft = nextSection.position().left; // Get the left position of the next section
            $('#content-area').animate({ left: -sectionLeft }, 500); // Animate the content area to scroll
        }
    }

    $('#next-section-arrow').on('click', function() {
        scrollToNextSection();
    });

    function scrollToSection(sectionId) {
        const section = $(`#${sectionId}`);
        const sectionLeft = section.offset().left;
        
        playerX = sectionLeft - $(window).width() / 2 + section.width() / 2;
        playerY = Math.min(Math.max(30, playerY), $(window).height() - 60);
        
        updatePlayerPosition();
    }


    function createPlatforms(count) {
        for (let i = 0; i < count; i++) {
            const platform = $('<div class="platform"></div>');
            const x = Math.random() * (gameArea.width() - 100);
            const y = Math.random() * (gameArea.height() - 200); // Ensure platforms are not too low
            const width = Math.random() * 80 + 100; // Width of the platform
            const height = 10; // Fixed height for platforms
    
            platform.css({
                left: x + 'px',
                top: y + 'px',
                width: width + 'px',
                height: height + 'px',
                backgroundColor: '#08605F' // Color of the platform
            });
    
            gameArea.append(platform);
            obstacles.push({
                element: platform, // Store the DOM element reference
                x: x,
                y: y,
                width: width,
                height: height
            });
        }
    }
    
    function checkCollision() {
        let isLanding = false; // Flag to check if landing on a platform
        for (const obstacle of obstacles) {
            const playerRect = {
                left: playerX,
                top: playerY,
                right: playerX + 40, // Assuming player width is 40
                bottom: playerY + 60 // Assuming player height is 60
            };
    
            const obstacleRect = {
                left: obstacle.x,
                top: obstacle.y,
                right: obstacle.x + obstacle.width,
                bottom: obstacle.y + obstacle.height
            };
    
            // Check for collision
            if (
                playerRect.right > obstacleRect.left &&
                playerRect.left < obstacleRect.right &&
                playerRect.bottom > obstacleRect.top &&
                playerRect.top < obstacleRect.bottom
            ) {
                // Collision detected
                if (playerRect.bottom <= obstacleRect.top + 10 && playerRect.bottom > obstacleRect.top) {
                    // Only land if falling
                    playerY = obstacleRect.top - 60; // Land on top of the platform
                    isLanding = true; // Set landing flag
                }
            }
        }
        return isLanding; // Return whether the player landed
    }

    function updatePlayerPosition() {
        if (movingLeft) moveLeft();
        if (movingRight) moveRight();
        if (movingUp) moveUp();
        if (movingDown) moveDown();

        player.css({
            'left': `${playerX}px`,
            'top': `${playerY}px`
        });
    }

    function gameUpdate() {
        if (movingLeft) moveLeft();
        if (movingRight) moveRight();
        if (movingUp) moveUp(); // Check for upward movement
        if (movingDown) moveDown(); // Check for downward movement
        updatePlayerPosition();
    }

    function standUp() {
        if (isCrouching) {
            isCrouching = false;
            player.removeClass('crouching');
        }
    }

    function moveLeft() {
        playerX = Math.max(0, playerX - step);
        player.attr('src', player.data('face-left')); // Set to left walking GIF
        facingRight = false; // Update facing direction
    }
    
    function moveRight() {
        playerX = Math.min(gameArea.width() - 40, playerX + step);
        player.attr('src', player.data('face-right')); // Set to right walking GIF
        facingRight = true; // Update facing direction
    }
    
    function moveUp() {
        if (playerY > 0) { // Prevent moving above the game area
            playerY -= step; // Move up
            player.attr('src', player.data('face-up')); // Set to up walking GIF
        }
    }
    
    function moveDown() {
        if (playerY < gameArea.height() - 60) { // Prevent moving below the game area
            playerY += step; // Move down
            player.attr('src', player.data('face-down')); // Set to down walking GIF
        }
    }

    $(document).on('keydown', function(e) {
        switch(e.which) {
            case 37: movingLeft = true; break;
            case 38: movingUp = true; break;
            case 39: movingRight = true; break;
            case 40: movingDown = true; break;
            case 13: // Enter key
                checkForNavLinks(); // Check if the character is near any navigation link
                break;
            default: return;
        }
        e.preventDefault();
    });

    $(document).on('keyup', function(e) {
        switch(e.which) {
            case 37: movingLeft = false; break;
            case 38:
                playerY = Math.max(0, playerY - step); 
                movingUp = false; 
            break;
            case 39: movingRight = false; break;
            case 40: 
                playerY = Math.min(gameArea.height() - 60, playerY + step);
                movingDown = false; 
            break;
            default: return;
        }
        checkForLinks(); 
        checkForTestimonials(); 
        checkForCareerItems();
        checkForProjects();
    });

    $('#left-btn').on('touchstart mousedown', function(e) {
        e.preventDefault();
        movingLeft = true;
    }).on('touchend mouseup mouseleave', function() {
        movingLeft = false;
    });

    $('#right-btn').on('touchstart mousedown', function(e) {
        e.preventDefault();
        movingRight = true;
    }).on('touchend mouseup mouseleave', function() {
        movingRight = false;
    });

    $('#up-btn').on('touchstart mousedown', function(e) {
        e.preventDefault();
        movingUp = true;
    }).on('touchend mouseup mouseleave', function() {
        movingUp = false;
    });

    $('#down-btn').on('touchstart mousedown', function(e) {
        e.preventDefault();
        movingDown = true;
    }).on('touchend mouseup mouseleave', function() {
        movingDown = false;
    });

    $(document).on('click', '.arrow', function() {
        const sectionId = $(this).data('section');
        scrollToSection(sectionId);
    });

    function initializeGame() {
        // createObstacles(50);
        // createPlatforms(50);
        setInitialPlayerPosition();
        if (!gameLoop) {
            gameLoop = setInterval(gameUpdate, 50);
        }
    }

function resizeGameArea() {
        const numSections = sections.length;
        gameContainer.css({
            width: $(window).width() * numSections,
            height: $(window).height()
        });
        gameArea.css({
            width: $(window).width() * numSections,
            height: $(window).height()
        });
        
        projectilesContainer.empty();
        arrowsContainer.empty();

        // createArrows();
        setInitialPlayerPosition();

        if (obstacles.length === 0) {
            initializeGame();
        } else {
            updatePlayerPosition();
            gameUpdate();
        }
    }


    function checkForLinks() {
        const playerRect = {
            left: playerX,
            top: playerY,
            right: playerX + 50, // Adjust for character width
            bottom: playerY + 50 // Adjust for character height
        };
    
        $('.nav-link').each(function() {
            const linkRect = this.getBoundingClientRect();
    
            // Check if the player is within the bounds of the link
            if (
                playerRect.right > linkRect.left &&
                playerRect.left < linkRect.right &&
                playerRect.bottom > linkRect.top &&
                playerRect.top < linkRect.bottom
            ) {
                $(this).addClass('active'); // Add active class to the link
            } else {
                $(this).removeClass('active'); // Remove active class if not near
            }
        });
    }

    function checkForNavLinks() {
        const playerRect = {
            left: playerX,
            top: playerY,
            right: playerX + player.width(),
            bottom: playerY + player.height()
        };
    
        // Check each navigation link
        $('.nav-link').each(function() {
            const linkRect = this.getBoundingClientRect();
    
            // Check if the player is within the bounds of the link
            if (
                playerRect.right > linkRect.left &&
                playerRect.left < linkRect.right &&
                playerRect.bottom > linkRect.top &&
                playerRect.top < linkRect.bottom
            ) {
                $(this).addClass('active'); 
                // Navigate to the link's href
                window.location.href = $(this).attr('href');
            }
        });
    }

    function checkForTestimonials() {
        const playerRect = {
            left: playerX,
            top: playerY,
            right: playerX + 50, // Adjust for character width
            bottom: playerY + 50 // Adjust for character height
        };
    
        $('.testimonial-item').each(function() {
            const itemRect = this.getBoundingClientRect();
    
            // Check if the player is within the bounds of the testimonial item
            if (
                playerRect.right > itemRect.left &&
                playerRect.left < itemRect.right &&
                playerRect.bottom > itemRect.top &&
                playerRect.top < itemRect.bottom
            ) {
                // Scroll the testimonials container down when the character is near
                if (playerY + 50 >= itemRect.bottom) { // If character is below the item
                    $('.testimonial-container').scrollTop($('.testimonial-container').scrollTop() + step);
                }
            }
        });
    }

    function checkForProjects() {
        const playerRect = {
            left: playerX,
            top: playerY,
            right: playerX + 50, // Adjust for character width
            bottom: playerY + 50 // Adjust for character height
        };
    
        $('.project-item').each(function() {
            const itemRect = this.getBoundingClientRect();
    
            // Check if the player is within the bounds of the project item
            if (
                playerRect.right > itemRect.left &&
                playerRect.left < itemRect.right &&
                playerRect.bottom > itemRect.top &&
                playerRect.top < itemRect.bottom
            ) {
                // Scroll the projects container down when the character is near
                if (playerY + 50 >= itemRect.bottom) { // If character is below the item
                    $('.project-container').scrollTop($('.project-container').scrollTop() + step);
                }
            }
        });
    }

    function checkForCareerItems() {
        const playerRect = {
            left: playerX,
            top: playerY,
            right: playerX + 50, // Adjust for character width
            bottom: playerY + 50 // Adjust for character height
        };
    
        $('.career-item').each(function() {
            const itemRect = this.getBoundingClientRect();
    
            // Check if the player is within the bounds of the career item
            if (
                playerRect.right > itemRect.left &&
                playerRect.left < itemRect.right &&
                playerRect.bottom > itemRect.top &&
                playerRect.top < itemRect.bottom
            ) {
                // Scroll the career section down when the character is near
                if (playerY + 50 >= itemRect.bottom) { // If character is below the item
                    $('.career-container').scrollTop($('.career-container').scrollTop() + step);
                }
            }
        });
    }

    $('#hamburger').click(function() {
        $('#nav-links').toggleClass('active'); // Toggle the active class
    });
    $(window).on('resize', resizeGameArea);
    resizeGameArea();
});