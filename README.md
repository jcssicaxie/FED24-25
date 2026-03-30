# Processdocument
## Me

<details open>

  ### Author:
Jessica Xie

  #### Focus:
Responsiveness
 
</details>





## The website

<details open>

  ### The assignment:
  https://en.thug-club.com/#anchor1 

  #### Screenshot(s) of the first page (small screen): 
  Homepage 
  <img src="readme-images/screenshot1.jpg" width="375px" alt="homepagina">

  #### Screenshot(s) of the second page (small screen):
  Shopping page
  <img src="readme-images/screenshot2.jpg" width="375px" alt="shopping pagina">
 
</details>



## Accessibility test 1/2 (week 1)

<details>

  ### Observations
The screen reader experience was good, but visually still unclear.
- Hardly any alt attributes on images
- Hardly any page titles
- The tab key is not usable on some pages
- Multiple headings (H1) are used
- No skip link available

  <img src="readme-images/screenshot1.jpg" width="375px" alt="homepagina">

</details>



## Breakdownsketch (week 1)

<details>

  ### The whole page: 
  <img src="readme-images/breakdownschets1.jpg" width="375px" alt="breakdown van de hele pagina">

  ### Section main: 
  <img src="readme-images/breakdownschets2.jpg" width="375px" alt="breakdown van een main section">

  ### Footer: 
  <img src="readme-images/breakdownschets3.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Progress 1 (week 2)

<details>

  ### Current status
  <img src="readme-images/week2.jpg">
  <img src="readme-images/week2-1.jpg">

  ### Meeting report
- Change the language in the head from nl to en (English website)
- Use SVG
- Pay attention to indentation
- Alt text like “item 1” is not useful; the screen reader already reads the title
- Check the input field in the footer
- Put the address in the footer in a list instead of a paragraph
- Use a select element for the drop-down menu
- Look into the homepage scroll indicator online

</details>





## Progress 2 (week 3)

<details>

  ### Current status
  I tried to incorporate the assignments covered in class and the feedback from the student assistants into my own code. So far, I have mainly focused on recreating the original website as accurately as possible.
<img src="readme-images/week3.jpg">
<img src="readme-images/week3-1.jpg">
<img src="readme-images/week3-2.jpg">

  ### Meeting report
- Set the header to the correct display
- Improve the button CSS
- Add / improve CSS
- Implement a JavaScript hamburger menu

</details>





## Accessibility test 2/2 (week 4)

<details>

  ### Observations
I used A11Y to check whether the color contrast was adequate
<img src="readme-images/goodcontrast.jpg">

and gradually added a light mode. My site was originally designed with a dark mode as the default.
<img src="readme-images/lightmode.jpg">

I then improved my :focus states and controls. My tabs are behaving strangely, so I still need to look into that. My headings, list items, and links are correct.

<img src="readme-images/eind10.jpg">

  ### Improvements compared to the original website:
- I added alt attributes to images where appropriate. In many cases, this was not necessary because the H3 already describes the image, so I left the alt attribute empty.
- I added page titles to improve clarity.
- I ensured the use of a single H1 element.
- I improved the color contrast.
- The original site uses many divs for each list item; I replaced these with semantic elements and attributes that are accessible to screen readers.
- I added :focus states to improve keyboard navigation.
- I also added a :hover state. It was not clear that the size guide was clickable, so I added an underline and a :hover state that makes the text italic to indicate interactivity.


</details>





## Progress 3 (week 4)

<details>

  ### Current status
I mainly struggle with JavaScript and the select = input forms.
<img src="readme-images/week4.jpg">
<img src="readme-images/week4-1.jpg">
<img src="readme-images/week4-2.jpg">
<img src="readme-images/week4-3.jpg">
<img src="readme-images/week4-4.jpg">
<img src="readme-images/week4-5.jpg">
<img src="readme-images/week4-6.jpg">

 ### Meeting report
- Improve the JavaScript; you should include a micro-interaction
- Create a close button to make it easier to use
- Add a form element to your input element
- Add an SVG link to your form

</details>





## Final review (week 5)

<details>

  ### The outcome – characteristic screenshots:
  <img src="readme-images/eind1.jpg" alt="uitkomst opdracht">
  <img src="readme-images/eind2.jpg" alt="uitkomst opdracht">
  <img src="readme-images/eind3.jpg" alt="uitkomst opdracht">

  De site is fully responsive
  <img src="readme-images/eind4.jpg" alt="uitkomst opdracht">
  <img src="readme-images/eind5.jpg" alt="uitkomst opdracht">
  <img src="readme-images/eind6.jpg" alt="uitkomst opdracht">
  <img src="readme-images/eind7.jpg" alt="uitkomst opdracht">

  With a light-mode
  <img src="readme-images/eind8.jpg" alt="uitkomst opdracht">
  <img src="readme-images/eind9.jpg" alt="uitkomst opdracht">

  ### What went well / What I learned:
I implemented the font-family using @font-face in CSS, even though it was not strictly required, and defined custom properties using :root. I also created small animations with JavaScript (such as hamburger menus) and revisited some useful JavaScript techniques.

I developed a solid understanding of CSS Grid, particularly how columns and rows function within a grid layout. In addition, I further improved my knowledge of Flexbox.

For the first time, I implemented a dark mode and light mode, as well as :focus pseudo-classes to improve accessibility. I also worked extensively with parent-child relationships, since we were not allowed to use <div> elements or classes/IDs. This actually helped me better understand how to target elements in CSS and JavaScript.

Over time, I gained a better understanding of @media queries and became faster and more efficient in writing HTML and CSS.

  ### What was challenging / What did not work:
For the homepage, I had to create an animated scroll indicator, with the idea of using @keyframes to code it. In the end, I was not able to achieve this.

  <img src="readme-images/eind6.jpg" alt="uitkomst opdracht">

On the right side, you can see a small yellow scroll indicator that does not add any real value. Additionally, the page does not transition smoothly to the next image as I intended. :c

After this, I worked on coding a different page that contained more content.

  <img src="readme-images/her1.jpg" alt="uitkomst opdracht">

On this page, I mainly struggled with smaller JavaScript components, such as the carousel and expanding the size guide. In terms of responsiveness, I was able to fix it quickly using @media queries for iPhone screen sizes.

  ### Updated reflection
These are the improvements I made based on feedback from classmate Thomas Plas:

- I adjusted the logo color for the light version by applying a filter (brightness: 0%), as this provides better contrast in light mode. According to A11Y guidelines, black on white offers better contrast than yellow on white. The original styling was retained for dark mode.
- I changed the layout of my item page from display: flex to display: grid. I made this decision because otherwise I had a section in my HTML without an H2, which is not semantically correct.
- The “sold out” button is now set to disabled="true", making it more semantic.
- For the size guide, I changed the element from a <p> to a <button>, which is more appropriate. The expanding table no longer disrupts the layout. This was fixed using display: grid and align-self: start. Now, when the table is expanded, all items remain aligned at the top and stay in place.
- In the footer, I ensured that the phone number and location have proper links. The same applies to the app icons in the expandable menu.
- I also made sure that screen readers read the Korean text in the footer using the correct Korean VoiceOver.
- For different desktop screen sizes, I ensured that the footer remains positioned at the bottom of the page.
- I attempted to make the select element interactive using :has, but this was not successful. My goal was to change the image (e.g., to itembrown.png) when a specific option value such as “brown” is selected. With more time, I would have been able to refine and complete this functionality.

</details>





## Sources

<details open>

  1. MDN input + select
  2. SVGrepo (menu icon)
  3. Codepen (hamburger menu)
  4. Thug Club
  5. OpenAI ChatGPT 
  6. https://stackoverflow.com/questions/17219688/href-tel-and-mobile-numbers 
  7. Thomas Plas (html reviewed + tips en feedback)

</details>
