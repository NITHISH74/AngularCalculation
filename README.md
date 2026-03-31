# AngularCalculation

<div align="center">

![Angular](https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A responsive web application for mathematical calculations using **Angular Framework**

[Live Demo](#output) • [Features](#features) • [Installation](#installation) • [Architecture](#architecture)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Objectives](#project-objectives)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Architecture](#project-architecture)
- [Components](#components)
- [How to Use](#how-to-use)
- [Output](#output)
- [Contributing](#contributing)
- [Author](#author)

---

## 🎯 Overview

**AngularCalculation** is a dynamic web application built with Angular that provides an intuitive interface for performing mathematical calculations. The application features multiple components designed to calculate areas and volumes of geometric shapes with real-time computation.

---

## ✨ Features

- ✅ **Real-time Calculations** - Instant results as you input values
- ✅ **Multiple Calculators** - Rectangle area and cylinder volume calculators
- ✅ **Responsive Design** - Works seamlessly across different browsers
- ✅ **Clean UI** - User-friendly interface with gradient styling
- ✅ **Type-Safe** - Built with TypeScript for better code reliability
- ✅ **Form Validation** - Two-way data binding with ngModel

---

## 🎓 Project Objectives

1. **Design** a dynamic website for mathematical calculations
2. **Implement** responsive layout using HTML, CSS, and TypeScript
3. **Develop** reusable Angular components
4. **Validate** functionality across multiple browsers
5. **Ensure** HTML code compliance and best practices
6. **Deploy** the application for production use

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Angular** | Frontend Framework |
| **TypeScript** | Programming Language |
| **HTML5** | Markup Language |
| **CSS3** | Styling |
| **FormsModule** | Two-way Data Binding |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Angular CLI

### Steps

```bash
# Clone the repository
git clone https://github.com/NITHISH74/AngularCalculation.git

# Navigate to project directory
cd AngularCalculation

# Install dependencies
npm install

# Start the development server
ng serve

# Open browser and navigate to
http://localhost:4200
```

---

## 🏗️ Project Architecture

```
AngularCalculation/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.module.ts
│   │   ├── rectangle/
│   │   │   ├── rectangle.component.ts
│   │   │   └── rectangle.component.html
│   │   └── cylinder/
│   │       ├── cylinder.component.ts
│   │       └── cylinder.component.html
│   └── main.ts
├── package.json
└── README.md
```

---

## 📱 Components

### 1. **Rectangle Component**
Calculates the area of a rectangle using length and breadth.

**Formula:** `Area = Length × Breadth`

```typescript
export class RectangleComponent {
    length: number;
    breadth: number;
    area: number;
    
    constructor() {
        this.length = 0;
        this.breadth = 0;
        this.area = this.length * this.breadth;
    }
    
    onCalculate() {
        this.area = this.length * this.breadth;
    }
}
```

**Template:**
```html
<div class="content">
    <h2>Area of the Rectangle</h2>
    <div class="input-group">
        <label>Length (m):</label>
        <input type="text" [(ngModel)]="length" placeholder="Enter length">
        
        <label>Breadth (m):</label>
        <input type="text" [(ngModel)]="breadth" placeholder="Enter breadth">
        
        <button (click)="onCalculate()">Calculate</button>
        
        <label>Area (m²):</label>
        <input type="text" [value]="area" readonly>
    </div>
</div>
```

---

### 2. **Cylinder Component**
Calculates the volume of a cylinder using radius and height.

**Formula:** `Volume = (22/7) × r² × h`

```typescript
export class CylinderComponent {
    radius: number;
    height: number;
    volume: number;
    
    constructor() {
        this.height = 0;
        this.radius = 0;
        this.volume = (22/7) * this.radius * this.radius * this.height;
    }
    
    onCalculate() {
        this.volume = (22/7) * this.radius * this.radius * this.height;
    }
}
```

**Template:**
```html
<div class="content">
    <h2>Volume of the Cylinder</h2>
    <div class="input-group">
        <label>Radius (m):</label>
        <input type="text" [(ngModel)]="radius" placeholder="Enter radius">
        
        <label>Height (m):</label>
        <input type="text" [(ngModel)]="height" placeholder="Enter height">
        
        <button (click)="onCalculate()">Calculate</button>
        
        <label>Volume (m³):</label>
        <input type="text" [value]="volume" readonly>
    </div>
</div>
```

---

### 3. **Root Module (App Module)**

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { RectangleComponent } from './rectangle/rectangle.component';

@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    CylinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

### 4. **Main Application Component**

```typescript
// app.component.ts - No logic needed, components handle calculations
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculation';
}
```

```html
<!-- app.component.html -->
<div class="app-container">
  <header>
    <h1>Math Calculator</h1>
    <p class="subtitle">Calculate geometric shapes with ease</p>
  </header>
  
  <main class="calculator-grid">
    <Rectangle-Area></Rectangle-Area>
    <Cylinder-Volume></Cylinder-Volume>
  </main>
  
  <footer>
    <p>© 2024 AngularCalculation | Developed by Nithishwar</p>
  </footer>
</div>
```

```css
/* app.component.css */
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

header {
  text-align: center;
  color: white;
  padding: 40px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  margin-top: 10px;
  opacity: 0.9;
}

.calculator-grid {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

footer {
  text-align: center;
  color: white;
  padding: 30px;
  margin-top: 60px;
  background: rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 🎮 How to Use

1. **Enter Values** - Input the required measurements (length, breadth, radius, or height)
2. **Click Calculate** - Press the calculate button to compute results
3. **View Results** - The calculated area or volume will be displayed instantly
4. **Clear & Retry** - Modify values and calculate again as needed

---

## 📸 Output

![Calculator Demo](https://user-images.githubusercontent.com/94164665/153758905-f4b7b1be-6b21-45e8-84fb-d0314961eb25.png)

---

## ✅ Validation Checklist

- ✓ Requirement collection completed
- ✓ Layout designed using HTML and CSS
- ✓ TypeScript logic implemented for calculations
- ✓ Validated across multiple browsers
- ✓ HTML code validated
- ✓ Application ready for deployment

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

**Nithishwar** 
- GitHub: [@NITHISH74](https://github.com/NITHISH74)

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star!**

</div>