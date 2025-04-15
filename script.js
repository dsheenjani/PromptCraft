// DOM Elements
const form = document.getElementById('promptForm');
const promptInput = document.getElementById('prompt');
const submitBtn = document.getElementById('submitBtn');
const sendIcon = submitBtn.querySelector('.send-icon');
const loaderIcon = submitBtn.querySelector('.loader');
const errorDiv = document.getElementById('error');
const generatedImageContainer = document.getElementById('generatedImageContainer');
const generatedImage = document.getElementById('generatedImage');
const wandSparkle = document.getElementById('wandSparkle');

const loading = document.getElementById('loading');
const imageDetails = document.getElementById('imageDetails');

// Hamburger Menu Toggle
const toggleMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');  // Toggle the 'active' class to show/hide nav
};

// Hamburger menu event listener (optional, but allows for better flexibility if you prefer to use JS for the toggle)
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);


// Fun facts and creative prompts data
const imagePrompts = {
    nature: {
        fact: "Did you know that there are over 391,000 species of plants known to science?",
        prompt: "Try creating a magical garden with bioluminescent flowers!"
    },
    space: {
        fact: "The largest known star, UY Scuti, is so big that it would take 1,700 years to walk around it at walking speed!",
        prompt: "Create a scene of a space station orbiting a giant star!"
    },
    ocean: {
        fact: "The ocean contains 99% of the living space on the planet!",
        prompt: "Imagine an underwater city with bioluminescent architecture!"
    },
    default: {
        fact: "AI can now generate images that never existed before, opening up endless creative possibilities!",
        prompt: "Try combining two unexpected elements in your next prompt!"
    }
};

// Helper Functions
const toggleLoadingState = (isLoading) => {
    submitBtn.disabled = isLoading;
    sendIcon.classList.toggle('hidden', isLoading);
    loaderIcon.classList.toggle('hidden', !isLoading);
    loading.classList.toggle('hidden', !isLoading);
    
    if (isLoading) {
        errorDiv.classList.add('hidden');
    }
};

const showError = (message) => {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    generatedImageContainer.classList.add('hidden');
};

const getFunFactAndPrompt = (prompt) => {
    const promptLower = prompt.toLowerCase();
    if (promptLower.includes('nature') || promptLower.includes('plant') || promptLower.includes('flower')) {
        return imagePrompts.nature;
    } else if (promptLower.includes('space') || promptLower.includes('star') || promptLower.includes('galaxy')) {
        return imagePrompts.space;
    } else if (promptLower.includes('ocean') || promptLower.includes('sea') || promptLower.includes('underwater')) {
        return imagePrompts.ocean;
    }
    return imagePrompts.default;
};

const showImageDetails = (prompt) => {
    const { fact, prompt: creativePrompt } = getFunFactAndPrompt(prompt);
    document.getElementById('funFact').textContent = fact;
    document.getElementById('creativePrompt').textContent = creativePrompt;
    imageDetails.classList.remove('hidden');
};

// Generate image using OpenAI API
const generateImage = async (prompt) => {
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: '1024x1024'
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || 'Failed to generate image');
        }

        return data.data[0].url;
    } catch (error) {
        throw new Error(error.message || 'Failed to generate image');
    }
};

// Event Listeners
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const prompt = promptInput.value.trim();
    if (!prompt) return;

    // ✨ Show sparkle before anything starts
    wandSparkle.classList.remove('hidden');

    toggleLoadingState(true);
    generatedImageContainer.classList.add('hidden');
    imageDetails.classList.add('hidden');

    try {
        const imageUrl = await generateImage(prompt);
        generatedImage.src = imageUrl;
        generatedImage.alt = prompt;

        // 🪄 Hide sparkle after image is fully loaded
        generatedImage.onload = () => {
            wandSparkle.classList.add('hidden');
        };

        generatedImageContainer.classList.remove('hidden');
        showImageDetails(prompt);
    } catch (error) {
        showError(error.message);
        wandSparkle.classList.add('hidden'); // Make sure to hide on error too
    } finally {
        toggleLoadingState(false);
    }
});


promptInput.addEventListener('input', () => {
    submitBtn.disabled = !promptInput.value.trim();
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Get all chips and the input field after the DOM is fully loaded
    const chips = document.querySelectorAll('.chip');
    const promptInput = document.getElementById('promp');

    // Add event listeners to chips
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const suggestion = chip.getAttribute('data-prompt');
            promptInput.value = suggestion; // Fill the input with the clicked suggestion
        });
    });
});


// Initialize
submitBtn.disabled = true;