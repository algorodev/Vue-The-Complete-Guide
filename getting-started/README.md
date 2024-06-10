<div align="center">
  <h1>Section 01 - Getting Started</h1>
</div>

## What is Vue?

Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and
provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any
complexity.

### Vue key features:

* **Lightweight and Performant:**
    * Vue.js boasts a small library size, contributing to faster page loads. It achieves high
      performance through an optimized reactive system.
* **Two-Way Binding:**
    * Vue.js introduces two-way binding, facilitating communication between the data model and the user
      interface. This ensures that when data changes, the interface is automatically updated.
* **Component-Based Architecture:**
    * Vue.js follows a component-based architecture, breaking down applications into small,
      independent, and reusable components. This approach enhances code organization and maintainability.
* **Flexibility and Extensibility:**
    * Vue.js features a flexible structure and can be easily integrated with other libraries
      or projects. It also provides a modular architecture, allowing developers to use only the parts they need.

### Vue Core Concepts:

* **Components:**
    * Vue.js applications are divided into small, independent components, each containing its own data, methods, and
      templates.
* **Data Binding:**
    * Vue.js incorporates a data binding system that automatically updates the interface when the data changes.
* **Directives:**
    * Directives are used to add special functionality to HTML elements. For example, the v-if directive allows
      conditional rendering of elements.
* **Events:**
    * Vue.js provides custom events that respond to user interactions, such as clicking a button.
* **Lifecycle Hooks:**
    * Vue components have specific lifecycle stages. Developers can define custom functions at different stages of the
      component’s lifecycle.

### Different ways to use Vue:

* Enhancing static HTML without a build step
* Embedding as Web Components on any page
* Single-Page Application (**SPA**)
* Fullstack / Server-Side Rendering (**SSR**)
* Jamstack / Static Site Generation (**SSG**)
* Targeting desktop, mobile, WebGL, and even the terminal

### Example

```javascript
Vue.createApp({
	setup() {
		return {
			count: ref(0)
		}
	}
}).mount('#app')
```

```html

<button @click="count++">
	Count is: {{ count }}
</button>
```


