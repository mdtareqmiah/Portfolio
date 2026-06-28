# MD. Tareq Miah - Professional Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. This portfolio showcases professional background, technical skills, projects, competitive programming achievements, education, and contact information.

## Features

✨ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
🎨 **Modern UI/UX** - Clean, professional design with smooth animations
📱 **Mobile Navigation** - Hamburger menu for mobile devices
🔗 **Smooth Scrolling** - Smooth navigation between sections
🎯 **Navigation Highlight** - Active navigation indicator as you scroll
📧 **Contact Form** - Functional contact form with email integration
🎨 **Gradient Design** - Eye-catching gradients and modern color scheme
⚡ **Performance Optimized** - Fast loading and smooth interactions
🔍 **SEO Friendly** - Semantic HTML for better search engine optimization

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Me** - Professional summary and key statistics
3. **Technical Skills** - Organized skill categories with tags
4. **Projects** - Showcase of academic and personal projects
5. **Competitive Programming** - CP achievements and platform links
6. **Education** - Timeline of educational background
7. **Leadership & Volunteer Experience** - Community involvement
8. **Contact** - Contact information and message form
9. **Footer** - Quick links and additional information

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox and grid layouts
- **JavaScript** - Interactive features and animations
- **Font Awesome** - Icon library for social links and decorations

## File Structure

```
e:/PPORTFOLIO/
├── index.html      # Main HTML file
├── style.css       # Styling and layouts
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Getting Started

### Local Development

1. **Clone or Download** the portfolio files to your local machine
2. **Open `index.html`** in your web browser using one of these methods:
   - Double-click the `index.html` file
   - Right-click → Open with → Your favorite browser
   - Use a local server (recommended for testing)

### Using a Local Server (Recommended)

For better performance and to avoid CORS issues:

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Start server
http-server
```

**Using Live Server in VS Code:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

Then visit `http://localhost:8000` or the URL provided by your server.

## Customization

### Update Personal Information

Edit the following sections in `index.html`:

1. **Contact Information** (Multiple locations):
   - Phone number
   - Email address
   - Location

2. **Social Links**:
   - LinkedIn profile URL
   - GitHub profile URL
   - Other social profiles

3. **Content Sections**:
   - Hero subtitle and description
   - About section text
   - Project details
   - Education information
   - All other textual content

### Modify Colors

Edit the CSS variables in `style.css` (lines 13-19):

```css
:root {
    --primary-color: #0066ff;        /* Main blue color */
    --secondary-color: #00d4ff;      /* Cyan accent */
    --dark-bg: #0f1419;              /* Dark background */
    --light-bg: #ffffff;             /* Light background */
    --text-dark: #1a1a1a;            /* Dark text */
    --text-light: #666666;           /* Light text */
    --border-color: #e0e0e0;         /* Border color */
    --accent-color: #ff6b6b;         /* Red accent */
    --success-color: #4caf50;        /* Green success */
}
```

### Add New Projects

Add a new project card in the Projects section:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
        <div class="project-tags">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
    <p>Project description goes here...</p>
    <ul class="project-points">
        <li>Achievement 1</li>
        <li>Achievement 2</li>
        <li>Achievement 3</li>
    </ul>
</div>
```

### Update Skills

Modify skill cards in the Skills section by adding or removing tags:

```html
<div class="skill-card">
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="tag">Skill 1</span>
        <span class="tag">Skill 2</span>
    </div>
</div>
```

## Deployment Options

### 1. **GitHub Pages** (Free)
- Push your files to a GitHub repository
- Go to Settings → Pages → Set source to main branch
- Your portfolio will be live at `https://username.github.io/repository-name`

### 2. **Netlify** (Free)
- Go to [netlify.com](https://netlify.com)
- Drag and drop your folder or connect to GitHub
- Get automatic deployments on every push

### 3. **Vercel** (Free)
- Go to [vercel.com](https://vercel.com)
- Import your Git repository or upload files
- Automatic deployments and custom domain support

### 4. **Web Hosting** (Paid)
- Use any web hosting service (Bluehost, SiteGround, etc.)
- Upload files via FTP or File Manager
- Point your custom domain to the hosting

### 5. **Your Own Server**
- Upload files to your VPS/server
- Configure a web server (Nginx, Apache)
- Use SSL certificate for HTTPS

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images** - Use compressed images if you add any
2. **Minify CSS/JS** - For production, minify the CSS and JavaScript files
3. **Use CDN** - Consider using a CDN for Font Awesome icons in production
4. **Lazy Loading** - Implement lazy loading for images if added

## SEO Optimization

- Update the `<title>` tag with your name and profession
- Modify meta descriptions
- Add structured data (schema.org) for better SIRT results
- Ensure mobile responsiveness (checked ✓)
- Add Open Graph meta tags for social sharing

## Contact Form

The contact form uses a mailto link to send emails. For a more robust solution, consider:

1. **Formspree** - Add form handling without backend
2. **Basin** - Simple form backend
3. **EmailJS** - JavaScript library for email sending
4. **Backend API** - Build your own backend with Node.js, Python, etc.

## Accessibility Features

- Semantic HTML elements
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- ARIA labels where needed

## Security Considerations

- No sensitive data is stored locally
- Email form uses secure mailto links
- No external scripts that could compromise security
- All external links have `target="_blank"` and `rel="noopener"`

## Troubleshooting

### Form not working?
- Ensure your email client is configured
- For production, consider using a backend service

### Styles not loading?
- Check that all files are in the same directory
- Clear browser cache (Ctrl+Shift+Delete)

### Mobile menu not working?
- Ensure JavaScript is enabled in your browser
- Check browser console for errors (F12)

### Animations not smooth?
- Try a different browser
- Reduce animation settings in CSS if on a slow device

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering by technology
- [ ] Real backend for contact form
- [ ] Resume PDF download
- [ ] Testimonials section
- [ ] Skills progress bars
- [ ] Project image galleries
- [ ] Animation presets
- [ ] Multilingual support

## License

This portfolio template is free to use and modify for personal use.

## Support

For issues or questions:
- Check the troubleshooting section
- Review the HTML/CSS/JS code for any custom changes
- Test in different browsers
- Check browser console (F12) for errors

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques for responsive design

---

**Last Updated:** 2026
**Created for:** MD. Tareq Miah
**Status:** Production Ready

Enjoy your professional portfolio! 🚀