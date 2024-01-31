import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Category class
export class Category {
  id!: number;
  name!: string;
  slug!: string;
}
// Tag class
export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}
// Project class
export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// App component class
export class AppComponent {
  title = "Tracy's Showcase"
  date = new Date().getFullYear();
  author = 'Tracy Huang';

  //Data arrays for the categories
  categories: Category[] = [
    { "id": 1, "slug": "back-end", "name": "Back End" },
    { "id": 2, "slug": "front-end", "name": "Front End" },
    { "id": 3, "slug": "full-stack", "name": "Full Stack" }
  ];
  //Data arrays for the tags
  tags: Tag[] = [
    {"id":1,"name":"MVC","slug":"mvc"},
    {"id":2,"name":"Javascript","slug":"javascript"},
    {"id":3,"name":"CSS","slug":"css"},
    {"id":4,"name":"Node.js","slug":"node.js"},
    {"id":5,"name":"React","slug":"react"},
    {"id":6,"name":"HTML","slug":"html"},
    {"id":7,"name":"SASS","slug":"sass"},
  ];
  //Data arrays for the projects
  projects: Project[] = [
    {
      "id": 1,
      "title": "Paypal Security with MVC",
      "slug": "paypal-security-with-mvc",
      "excerpt": "Learning how to secure your Paypal account with MVC.",
      "body": "<p>To enhance PayPal account security using the MVC architecture, prioritize multi-layered defenses. In the Model-View-Controller structure, fortify the model layer with encryption for sensitive data, employ secure coding practices, and keep third-party libraries updated. Implement user authentication measures and integrate Multi-Factor Authentication (MFA) to add an extra layer of verification. In the view layer, ensure secure communication through HTTPS </p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "back-end", "name": "Back End" },
      "tags": [
        {
          "id":1,
          "name":"MVC",
          "slug":"mvc",
          "pivot": { "projects_id": 1, "tags_id": 1 }
        },
      ]
    },
    {
      "id": 2,
      "title": "News Site Homepage",
      "slug": "news-site-homepage",
      "excerpt": "Using SASS to create a news site homepage.",
      "body": "<p>Utilizing Sass for a news homepage can significantly enhance the efficiency and maintainability of the stylesheet, ultimately contributing to a more polished and dynamic user interface. With Sass, developers can take advantage of features like variables to define and manage consistent colors, fonts, and other design elements across the news site. This is particularly beneficial for a homepage that may feature diverse sections with varying styles.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id": 2,
          "name": "Javascript",
          "slug": "javascript",
          "pivot": { "projects_id": 2, "tags_id": 2 }
        },
        {"id":7,
        "name":"SASS",
        "slug":"sass",
        "pivot": { "projects_id": 2, "tags_id": 7 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 2, "tags_id": 3 }
        },
        {
          "id":6,
          "name":"HTML",
          "slug":"html",
          "pivot": { "projects_id": 2, "tags_id": 6 }
        },
      ]
    },
    {
      "id": 3,
      "title": "React Calculator",
      "slug": "react-calculator",
      "excerpt": "React can create a calculator that can perform basic arithmetic operations.",
      "body": "<p>Leveraging React components for the calculator, display, and buttons, the layout is structured using the CSS Grid system. The calculator's grid accommodates digit buttons, operators, and other controls. Handling button clicks is implemented through state management in React, updating the input dynamically. </p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": null,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id":5,
          "name":"React",
          "slug":"react",
          "pivot": { "projects_id": 3, "tags_id": 5 }
        },
        {
          "id": 2,
          "name": "Javascript",
          "slug": "javascript",
          "pivot": { "projects_id": 3, "tags_id": 2 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 3, "tags_id": 3 }
        },
        {
          "id":6,
          "name":"HTML",
          "slug":"html",
          "pivot": { "projects_id": 3, "tags_id": 6 }
        },
      ]
    },
    {
      "id": 4,
      "title": "Explore Sanrio Land with the use of Javascript!",
      "slug": "explore-sanrio-land-with-the-use-of-javascript",
      "excerpt": "Transitions and animations are a great way to enhance the user experience.",
      "body": "<p>Utilizing  HTML, CSS, and Javascript, I was able to transform a traditional High-Low game into a more engaging and immersive experience for Sanrio enthuasiasts. While trying to save Sanrio Land, users are able to experience an auditory component when playing the game. Futhermore, each time a user successfully completes the game, they are rewarded with a different and unique end screen character making every victory in the game a personalized achievement!</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id": 2,
          "name": "Javascript",
          "slug": "javascript",
          "pivot": { "projects_id": 4, "tags_id": 2 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 4, "tags_id": 3 }
        },
        {
          "id":6,
          "name":"HTML",
          "slug":"html",
          "pivot": { "projects_id": 4, "tags_id": 6 }
        },
      ]
    },
    {
      "id": 5,
      "title": "Express Billing with Node.js",
      "slug": "express-billing-with-node.js",
      "excerpt": "Creating an express billing with Node.js can help with making an efficient billing system.",
      "body": "<p>Express billing with Node.js involves leveraging the Express.js framework to create a streamlined and efficient billing system. Using Node.js as the server-side runtime, developers can build scalable and real-time billing solutions. Express simplifies the creation of robust APIs for handling billing transactions, incorporating features like secure payment gateways and user authentication. </p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id":4,
          "name":"Node.js",
          "slug":"node.js",
          "pivot": { "projects_id": 5, "tags_id": 4 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 5, "tags_id": 3 }
        },
      ]
    },
    {
      "id": 6,
      "title": "Movie App with React",
      "slug": "Movie-app-with-react",
      "excerpt": "Building a movie app with React is a great way to learn how to use React.",
      "body": "<p>Using react to build a movie app creates a difficult challenge for software developers. Connecting the API to the movie app is definitely a challenging process.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": null,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id":5,
          "name":"React",
          "slug":"react",
          "pivot": { "projects_id": 6, "tags_id": 5 }
        },
        {
          "id": 2,
          "name": "Javascript",
          "slug": "javascript",
          "pivot": { "projects_id": 6, "tags_id": 2 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 6, "tags_id": 3 }
        },
        {
          "id":6,
          "name":"HTML",
          "slug":"html",
          "pivot": { "projects_id": 6, "tags_id": 6 }
        },
      ]
    },
    {
      "id": 7,
      "title": "Shopping Cart with React",
      "slug": "shopping-cart-with-react",
      "excerpt": "Creating a shopping cart teaches you how to use React!",
      "body": "<p>Being able to develop a web page that can handle adding items to your cart and removing items with the use of React is quite powerful.  </p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": null,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End" },
      "tags": [
        {
          "id": 2,
          "name": "Javascript",
          "slug": "javascript",
          "pivot": { "projects_id": 7, "tags_id": 2 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 7, "tags_id": 3 }
        },
        {
          "id":6,
          "name":"HTML",
          "slug":"html",
          "pivot": { "projects_id": 7, "tags_id": 6 }
        },
      ]
    },
    {
      "id": 8,
      "title": "Industry Project",
      "slug": "industry-project",
      "excerpt": "Future project in the works!",
      "body": "<p>Leading up to the industry project, students have worked long and hard to prepare for this exciting time! With this industry project, students can display their work and how much they have learned throughout the year!</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id":5,
          "name":"React",
          "slug":"react",
          "pivot": { "projects_id": 6, "tags_id": 5 }
        },
        {
          "id": 2,
          "name": "Javascript",
          "slug": "javascript",
          "pivot": { "projects_id": 6, "tags_id": 2 }
        },
        {
          "id": 3,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 6, "tags_id": 3 }
        },
        {
          "id":6,
          "name":"HTML",
          "slug":"html",
          "pivot": { "projects_id": 6, "tags_id": 6 }
        },
      ]
    }
  ];

categoryFilter?: Category;
// This sets the category filter
  setCategoryFilter(category: Category): void {
    this.categoryFilter = category;
  }
// This clears the category filter
  clearFilters(): void {
    this.categoryFilter = undefined;
  }
// The method to filter the projects
  filteredProjects(): Project[] {
    if (this.categoryFilter) {
      // If there is a category filter, return only projects that match that specific category
      return this.projects.filter(project => project.category?.id === this.categoryFilter!.id);
    } else {
      // If there is no category filter, return all projects
      return this.projects;
    }
  }
}