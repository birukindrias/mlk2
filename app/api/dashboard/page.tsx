import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meleket API Dashboard",
  description: "API Documentation for Meleket webapp",
};

export default function ApiDashboard() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Meleket API Dashboard</h1>
        <p className="text-slate-500">
          API documentation for accessing project data
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Endpoints</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded-md mr-2">
                  GET
                </span>
                <code className="text-sm font-mono">/api/projects</code>
              </div>
              <p className="mb-4 text-slate-700">Returns all projects data</p>
              <div className="bg-slate-50 p-4 rounded-md mb-4">
                <p className="font-medium mb-2">Example response:</p>
                <pre className="text-xs overflow-x-auto p-2 bg-slate-100 rounded">
                  {JSON.stringify(
                    [
                      {
                        id: 1,
                        title: "Project Title",
                        slug: "project-slug",
                        excerpt: "Brief project description",
                        coverImage: "/path/to/image.jpg",
                        featured: true,
                      },
                    ],
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded-md mr-2">
                  GET
                </span>
                <code className="text-sm font-mono">
                  /api/projects?featured=true
                </code>
              </div>
              <p className="mb-4 text-slate-700">
                Returns only featured projects
              </p>
            </div>

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded-md mr-2">
                  GET
                </span>
                <code className="text-sm font-mono">
                  /api/projects?slug=project-slug
                </code>
              </div>
              <p className="mb-4 text-slate-700">
                Returns detailed data for a specific project
              </p>
              <div className="bg-slate-50 p-4 rounded-md mb-4">
                <p className="font-medium mb-2">Example response:</p>
                <pre className="text-xs overflow-x-auto p-2 bg-slate-100 rounded">
                  {JSON.stringify(
                    {
                      id: 1,
                      title: "Project Title",
                      slug: "project-slug",
                      excerpt: "Brief project description",
                      coverImage: "/path/to/image.jpg",
                      content: "Detailed project content...",
                      client: "Client Name",
                      timeline: "3 months",
                      teamSize: 5,
                      platforms: ["Web", "Mobile"],
                      technologies: ["React", "Next.js"],
                      challenges: ["Challenge 1", "Challenge 2"],
                      solutions: ["Solution 1", "Solution 2"],
                      results: ["Result 1", "Result 2"],
                      testimonials: [
                        {
                          quote: "Great work!",
                          author: "John Doe",
                          role: "CEO",
                        },
                      ],
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Using the API</h2>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <p className="mb-4">
              You can access these endpoints using any HTTP client. Example
              using fetch:
            </p>
            <pre className="text-xs overflow-x-auto p-4 bg-slate-100 rounded-md">
              {`// Get all projects
fetch('/api/projects')
  .then(response => response.json())
  .then(data => console.log(data));

// Get a specific project
fetch('/api/projects?slug=habesha-market-campaign')
  .then(response => response.json())
  .then(data => console.log(data));`}
            </pre>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Website
        </Link>
      </footer>
    </div>
  );
}
