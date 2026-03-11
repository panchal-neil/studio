import type { RoadmapCategory } from '@/lib/types';
import {
  Code2,
  Database,
  Container,
  Package,
  LayoutTemplate,
  ChevronRight,
  Milestone,
  Box,
  Binary,
  GitCommit,
  Layers,
  FileCode,
  FileText,
  MousePointer,
  ToyBrick,
  DatabaseZap,
  Table,
  Columns,
  GitMerge,
  FunctionSquare,
  Network
} from 'lucide-react';

export const roadmapData: RoadmapCategory[] = [
  {
    id: 'python',
    title: 'Python',
    icon: Code2,
    topics: [
      {
        id: 'installation',
        title: 'Installation',
        path: 'python/installation',
        description: 'Install Python 3.13 and set up your development environment.',
        content: [
          {
            type: 'text',
            content: 'Python 3.13 is the latest Long-Term Support (LTS) version. We recommend using it for stability. You can download it from the official Python website or use a version manager like `pyenv`.'
          },
          {
            type: 'concept',
            title: 'Using pyenv (Recommended)',
            description: '`pyenv` lets you easily switch between multiple versions of Python.',
            icon: Layers,
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Install pyenv and Python 3.13',
            code: `
# Install pyenv (macOS with Homebrew)
brew update
brew install pyenv

# Install Python 3.13.0
pyenv install 3.13.0

# Set it as your global default
pyenv global 3.13.0
            `
          },
          { type: 'resource', url: 'https://www.python.org/downloads/', title: 'Official Python Downloads' },
          { type: 'resource', url: 'https://github.com/pyenv/pyenv', title: 'pyenv on GitHub' }
        ]
      },
      {
        id: 'environments',
        title: 'Virtual Environments',
        path: 'python/environments',
        description: 'Learn why and how to create isolated Python environments.',
        content: [
          {
            type: 'concept',
            title: 'Why create virtual environments?',
            description: 'Environments isolate project dependencies. This prevents conflicts between projects that require different versions of the same library. It makes your project self-contained and reproducible.',
            icon: Box
          },
          {
            type: 'text',
            content: 'Python has a built-in module called `venv` for creating virtual environments.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Creating and Activating a venv',
            code: `
# Create a virtual environment in a folder named 'venv'
python3 -m venv venv

# Activate it (macOS/Linux)
source venv/bin/activate

# On Windows, use:
# .\\venv\\Scripts\\activate
            `
          },
          {
            type: 'text',
            content: "Once activated, your terminal prompt will change to show the environment's name. Any packages you install will be local to this environment."
          }
        ]
      },
      {
        id: 'dependencies',
        title: 'Dependency Management',
        path: 'python/dependencies',
        description: 'Manage project dependencies with pip and requirements files.',
        content: [
          {
            type: 'concept',
            title: 'What is pip?',
            description: '`pip` is the standard package manager for Python. You use it to install libraries from the Python Package Index (PyPI).',
            icon: Package
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Installing packages',
            code: `
# Install a package (e.g., Django)
pip install Django

# Install a specific version
pip install Django==5.0.6
            `
          },
          {
            type: 'concept',
            title: 'Freezing Requirements',
            description: 'A `requirements.txt` file lists all the packages your project needs. This allows other developers (or your server) to install the exact same dependencies.',
            icon: FileText
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Creating and using requirements.txt',
            code: `
# Generate a requirements.txt file from your current environment
pip freeze > requirements.txt

# Install all packages from a requirements.txt file
pip install -r requirements.txt
            `
          },
          {
            type: 'concept',
            title: 'Using UV',
            description: '`uv` is an extremely fast Python package installer, written in Rust. It can be used as a drop-in replacement for `pip` for faster installs.',
            icon: ToyBrick,
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Installing with uv',
            code: `
# Install all packages from a requirements.txt file using uv
uv pip install -r requirements.txt
            `
          },
          { type: 'resource', url: 'https://astral.sh/uv', title: 'Learn more about uv' }
        ]
      },
      {
        id: 'oop',
        title: 'OOP Concepts',
        path: 'python/oop',
        description: 'Core Object-Oriented Programming concepts for Django development.',
        content: [
          {
            type: 'text',
            content: 'Object-Oriented Programming (OOP) is crucial for working with frameworks like Django and Django REST Framework. You will frequently extend or overwrite existing classes and methods.'
          },
          {
            type: 'concept',
            title: 'Classes and Objects',
            description: 'A class is a blueprint for creating objects. An object is an instance of a class.',
            icon: ToyBrick
          },
          {
            type: 'concept',
            title: 'Inheritance',
            description: "Allows a new class (child) to inherit attributes and methods from an existing class (parent). This is heavily used in Django's models and views.",
            icon: GitMerge
          },
          {
            type: 'concept',
            title: 'Polymorphism',
            description: "Allows methods to do different things based on the object it is acting upon. A common use is method overriding, where a child class provides its own implementation of a parent's method.",
            icon: FunctionSquare
          },
          {
            type: 'code',
            language: 'python',
            title: 'Example of Inheritance in Django',
            code: `
from django.db import models

# Parent class
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True # This model won't be created in the database

# Child class inheriting from BaseModel
class Product(BaseModel):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        # Overriding the default string representation
        return self.name
            `
          }
        ]
      },
      {
        id: 'behavior',
        title: 'Language Behavior',
        path: 'python/behavior',
        description: "Understand Python's synchronous, interpreted nature.",
        content: [
          {
            type: 'concept',
            title: 'Interpreted Language',
            description: "Python code is executed line by line by an interpreter. This is different from compiled languages (like C++) where the entire code is converted to machine code before running.",
            icon: ChevronRight
          },
          {
            type: 'concept',
            title: 'Synchronous Execution',
            description: "By default, Python executes one command at a time, in order. It waits for each operation to finish before moving to the next. For web servers, this has implications for handling multiple requests, which is where technologies like ASGI (used with Daphne/Uvicorn) come in to handle asynchronous operations.",
            icon: Milestone
          },
          {
            type: 'concept',
            title: 'The GIL (Global Interpreter Lock)',
            description: "A mechanism that allows only one thread to execute Python bytecode at a time. This simplifies memory management but can be a bottleneck for CPU-bound tasks in multi-threaded applications. For I/O-bound tasks (like web requests), it's less of an issue.",
            icon: Binary
          }
        ]
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL',
    icon: Database,
    topics: [
      {
        id: 'storage',
        title: 'Data Storage',
        path: 'sql/storage',
        description: 'How SQL databases store data in tables.',
        content: [
          {
            type: 'concept',
            title: 'Tables, Rows, and Columns',
            description: 'SQL databases organize data into tables. A table is like a spreadsheet. Each row represents a single record (e.g., a user), and each column represents an attribute of that record (e.g., username).',
            icon: Table
          },
          {
            type: 'concept',
            title: 'Primary Key',
            description: 'A column (or set of columns) that uniquely identifies each row in a table. Usually a simple auto-incrementing integer named `id`.',
            icon: GitCommit
          },
          {
            type: 'code',
            language: 'text',
            title: 'Visualizing Table Relations (One-to-Many)',
            code: `
  [authors] table              [posts] table
+----+------------+          +----+----------------+-----------+
| id | name       |          | id | title          | author_id |  <-- Foreign Key
+----+------------+          +----+----------------+-----------+
| 1  | Alice      |----|     | 1  | "First Post"   | 1         |
+----+------------+    |     +----+----------------+-----------+
                      |----> | 2  | "Second Post"  | 1         |
                             +----+----------------+-----------+
                             | 3  | "Another Post" | 2         |
                             +----+----------------+-----------+
            `
          }
        ]
      },
      {
        id: 'datatypes',
        title: 'Data Types',
        path: 'sql/datatypes',
        description: 'Common column data types and their uses in PostgreSQL and MySQL.',
        content: [
          {
            type: 'text',
            content: 'Choosing the correct data type is crucial for database performance, data integrity, and storage efficiency. Below are common data types for PostgreSQL and MySQL.'
          },
          {
            type: 'concept',
            title: 'Character Types (for storing text)',
            description: 'PostgreSQL: VARCHAR(n), TEXT. MySQL: VARCHAR(n), TEXT.',
            icon: FileText
          },
          {
            type: 'concept',
            title: 'Numeric Types (for storing numbers)',
            description: 'PostgreSQL: INTEGER, BIGINT, NUMERIC(p, s). MySQL: INT, BIGINT, DECIMAL(p, s).',
            icon: FunctionSquare
          },
          {
            type: 'concept',
            title: 'Date/Time Types (for storing temporal data)',
            description: 'PostgreSQL: TIMESTAMP, TIMESTAMPTZ, DATE. MySQL: TIMESTAMP, DATETIME, DATE.',
            icon: Milestone
          },
          {
            type: 'concept',
            title: 'Boolean Type (for storing true/false)',
            description: 'PostgreSQL: BOOLEAN. MySQL: BOOLEAN or TINYINT(1).',
            icon: Binary
          },
          {
            type: 'concept',
            title: 'JSON Types (for storing JSON data)',
            description: 'PostgreSQL: JSON, JSONB (recommended). MySQL: JSON.',
            icon: Code2
          }
        ]
      },
      {
        id: 'relations',
        title: 'Table Relations',
        path: 'sql/relations',
        description: 'Establishing relations between tables.',
        content: [
          {
            type: 'concept',
            title: 'Foreign Key',
            description: "A column in one table that is a primary key in another table. This creates a link between the two tables.",
            icon: GitMerge
          },
          {
            type: 'concept',
            title: 'One-to-Many',
            description: "The most common relationship. Example: One `Author` can have many `Posts`. The `posts` table would have a `author_id` foreign key.",
            icon: Network
          },
          {
            type: 'concept',
            title: 'Many-to-Many',
            description: "Example: One `Post` can have many `Tags`, and one `Tag` can be on many `Posts`. This requires a third 'junction' or 'through' table (e.g., `post_tags`) that contains `post_id` and `tag_id`.",
            icon: Network
          }
        ]
      },
      {
        id: 'joins',
        title: 'Joins & Aggregations',
        path: 'sql/joins',
        description: 'Combining and summarizing data from multiple tables.',
        content: [
          {
            type: 'text',
            content: 'Joins are used to combine rows from two or more tables based on a related column. Aggregations perform a calculation on a set of values and return a single value.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Visualizing Joins',
            code: `
  Table A         Table B
+---+-----+     +---+-----+
| id| val |     | id| val |
+---+-----+     +---+-----+
| 1 | 'X' |     | 1 | 'a' |
+---+-----+     +---+-----+
| 2 | 'Y' |     | 3 | 'c' |
+---+-----+     +---+-----+

INNER JOIN on A.id = B.id  (only matching IDs)
+---+-----+-----+
| 1 | 'X' | 'a' |
+---+-----+-----+

LEFT JOIN on A.id = B.id  (all of A, plus matches from B)
+---+-----+------+
| 1 | 'X' | 'a'  |
+---+-----+------+
| 2 | 'Y' | NULL |
+---+-----+------+
`
          },
          {
            type: 'code',
            language: 'sql',
            title: 'Example: LEFT JOIN with Aggregation (Explained)',
            code: `
-- Clause: SELECT
-- Purpose: Specifies the columns you want in the result.
-- Here, we get the author's name and calculate the number of posts.
SELECT
  authors.name,
  COUNT(posts.id) AS post_count

-- Clause: FROM
-- Purpose: The starting table for the query.
FROM authors

-- Clause: LEFT JOIN
-- Purpose: Combines rows from another table ('posts').
-- It keeps ALL rows from the 'authors' (left) table,
-- even if there's no match in 'posts'.
LEFT JOIN posts ON authors.id = posts.author_id

-- Clause: GROUP BY
-- Purpose: Used with aggregate functions (like COUNT) to group rows.
-- We group by author to count posts for each unique author.
GROUP BY authors.id;
`
          },
           {
            type: 'concept',
            title: 'Common Joins',
            description: '`INNER JOIN`: Returns records that have matching values in both tables. `LEFT JOIN`: Returns all records from the left table, and the matched records from the right table. `RIGHT JOIN`: Returns all records from the right table, and the matched records from the left table.',
            icon: GitMerge
          },
          {
            type: 'concept',
            title: 'Common Aggregations',
            description: '`COUNT()`: Counts the number of rows. `SUM()`: Calculates the sum of a set of values. `AVG()`: Calculates the average value. `MAX()`/`MIN()`: Returns the maximum/minimum value.',
            icon: FunctionSquare
          }
        ]
      },
      {
        id: 'naming',
        title: 'Naming Conventions',
        path: 'sql/naming',
        description: 'Using `snake_case` for database objects.',
        content: [
           {
            type: 'concept',
            title: 'Why snake_case?',
            description: "It's a widely adopted convention in the Python and PostgreSQL communities. It improves readability and avoids issues with case-sensitivity in some SQL databases.",
            icon: MousePointer
          },
          {
            type: 'code',
            language: 'sql',
            title: 'snake_case example',
            code: `
CREATE TABLE product_orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    order_date DATETIME
);
            `
          }
        ]
      }
    ]
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: Container,
    topics: [
      {
        id: 'containerization',
        title: 'Containerization',
        path: 'docker/containerization',
        description: 'What is containerization and why we use it.',
        content: [
          {
            type: 'concept',
            title: 'What is a Container?',
            description: "A container packages an application's code along with all its dependencies (libraries, system tools, etc.) into a single, isolated unit. It's like a lightweight, portable virtual machine.",
            icon: Box,
          },
          {
            type: 'concept',
            title: 'Benefits',
            description: "Consistency: Runs the same everywhere (dev, staging, prod). Isolation: Dependencies for one app don't interfere with others. Scalability: Easy to spin up new instances of your application.",
            icon: DatabaseZap
          }
        ]
      },
      {
        id: 'dockerfile',
        title: 'Dockerfile',
        path: 'docker/dockerfile',
        description: 'How to build a Dockerfile for a Python application.',
        content: [
          {
            type: 'text',
            content: 'A `Dockerfile` is a text file with instructions on how to build a Docker image.'
          },
          {
            type: 'code',
            language: 'dockerfile',
            title: 'Example Django Dockerfile',
            code: `
FROM python:3.13-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    default-libmysqlclient-dev \\
    pkg-config \\
    && rm -rf /var/lib/apt/lists/*

# Set work directory
WORKDIR /app

# Install Python dependencies
# Using uv for speed
RUN pip install uv
COPY requirements.txt .
RUN uv pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Expose port
EXPOSE 8000

# Run the application
CMD ["daphne", "-b", "0.0.0.0", "-p", "8000", "your_project.asgi:application"]
            `
          },
           {
            type: 'concept',
            title: 'Key Instructions',
            description: "`FROM`: Base image. `WORKDIR`: Sets the working directory. `COPY`: Copies files from host to image. `RUN`: Executes a command. `EXPOSE`: Informs Docker that the container listens on a specific port. `CMD`: Default command to run when the container starts.",
            icon: FileCode
          }
        ]
      },
      {
        id: 'compose',
        title: 'Docker Compose',
        path: 'docker/compose',
        description: 'Orchestrate multiple containers with docker-compose.yml.',
        content: [
          {
            type: 'text',
            content: 'Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services.'
          },
          {
            type: 'concept',
            title: 'Base vs. Dev Compose Files',
            description: "It's common practice to have a base `docker-compose.yml` for shared/production configuration and a `docker-compose.dev.yml` to override or add services for development (like a database or hot-reloading).",
            icon: Layers
          },
          {
            type: 'code',
            language: 'yaml',
            title: 'docker-compose.yml (Base)',
            code: `
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "\${DJANGO_PORT}:8000"
    env_file:
      - .env
    volumes:
      - .:/app # Mount code for hot-reloading
      - /app/__pycache__ # Anonymous volume to prevent overwriting
            `
          },
          {
            type: 'code',
            language: 'yaml',
            title: 'docker-compose.dev.yml (Development Override)',
            code: `
services:
  db:
    image: mysql:8.0
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: \${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: \${MYSQL_DATABASE}
      MYSQL_USER: \${MYSQL_USER}
      MYSQL_PASSWORD: \${MYSQL_PASSWORD}
    ports:
      - "\${MYSQL_EXPOSE_PORT}:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-u", "root", "-p\${MYSQL_ROOT_PASSWORD}"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 30s

  web:
    depends_on:
      db:
        condition: service_healthy

volumes:
  mysql_data:
            `
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Running Docker Compose',
            code: `
# Run services using both files
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# Build images and run
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Run in detached mode
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
            `
          }
        ]
      }
    ]
  },
  {
    id: 'django',
    title: 'Django',
    icon: LayoutTemplate,
    topics: [
      {
        id: 'intro',
        title: 'Introduction to Django',
        path: 'django/intro',
        description: 'Getting started with the Django web framework.',
        content: [
          {
            type: 'concept',
            title: 'What is Django?',
            description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the Model-View-Template (MVT) architectural pattern, which is a slight variation of the more common Model-View-Controller (MVC).",
            icon: ToyBrick
          },
          {
            type: 'text',
            content: 'Before diving deep, it is highly recommended to go through the official documentation and introductory tutorials. A good grasp of the fundamentals will make the learning process much smoother.'
          },
          { type: 'resource', url: 'https://www.djangoproject.com/', title: 'Official Django Documentation', description: 'The best place to start. The tutorial is excellent.' },
          { type: 'resource', url: 'https://www.youtube.com/watch?v=rHux0gMZ3Eg', title: 'Python Django Tutorial for Beginners', description: 'A comprehensive video tutorial covering the basics.'}
        ]
      }
    ]
  }
];
