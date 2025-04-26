import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { getProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Meleket",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Projects | Meleket`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-200 hover:text-blue-100 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                {project.category}
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {project.title}
          </h1>
          <p className="text-lg text-blue-100 mb-12 border-l-4 border-blue-400 pl-4">
            {project.longDescription}
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-blue-100 mb-6">{project.overview}</p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Challenges</h2>
              <p className="text-blue-100 mb-6">
                {project.solutions
                  ? "Before our project, we faced several key challenges:"
                  : "This project presented several key challenges:"}
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>

              {project.solutions && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-8">Solutions</h2>
                  <p className="text-blue-100 mb-6">
                    We developed solutions that addressed these challenges
                    effectively:
                  </p>
                  <ul className="space-y-2 mb-8 text-blue-100">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <span>
                          <strong>{solution.title}:</strong>{" "}
                          {solution.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.approach && (
                <>
                  <h2 className="text-2xl font-bold mb-4 mt-8">Our Approach</h2>
                  <p className="text-blue-100 mb-6">
                    We developed a comprehensive approach that focused on
                    achieving results:
                  </p>
                  <ul className="space-y-2 mb-8 text-blue-100">
                    {project.approach.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <span>
                          <strong>{item.title}:</strong> {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2 className="text-2xl font-bold mb-4 mt-8">Results</h2>
              <p className="text-blue-100 mb-6">
                Our project delivered significant results:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-blue-300 mb-2">
                      {result.metric}
                    </div>
                    <div className="text-blue-100">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white/5 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  {project.projectDetails && (
                    <>
                      <div>
                        <div className="text-sm text-blue-200 mb-1">Client</div>
                        <div className="flex items-center gap-2">
                          <span>{project.projectDetails.client}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          {project.projectDetails.timeline
                            ? "Timeline"
                            : "Duration"}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{project.projectDetails.timeline}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          Team Size
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{project.projectDetails.teamSize}</span>
                        </div>
                      </div>

                      {project.projectDetails.platforms && (
                        <div>
                          <div className="text-sm text-blue-200 mb-1">
                            Platform
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.projectDetails.platforms.map(
                              (platform, index) => (
                                <div
                                  key={index}
                                  className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded"
                                >
                                  {platform}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {project.projectDetails.technologies && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <h4 className="font-medium mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.projectDetails.technologies.map(
                              (tech, index) => (
                                <div
                                  key={index}
                                  className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded"
                                >
                                  {tech}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {project.campaignDetails && (
                    <>
                      <div>
                        <div className="text-sm text-blue-200 mb-1">Client</div>
                        <div className="flex items-center gap-2">
                          <span>{project.campaignDetails.client}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          Duration
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{project.campaignDetails.duration}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          Team Size
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{project.campaignDetails.teamSize}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          Channels
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.campaignDetails.channels.map(
                            (channel, index) => (
                              <div
                                key={index}
                                className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded"
                              >
                                {channel}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Need a Similar {project.category}?
                </h3>
                <p className="text-blue-100 mb-4">
                  Let our team help you with your next project.
                </p>
                <button className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
                  <a href="mailto:Melekettechnology@gmail.com">Contact Us</a>
                </button>
              </div>
            </div>
          </div>

          {/* Screenshots or Campaign Creative */}
          {project.screenshots && (
            <>
              <h2 className="text-2xl font-bold mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.alt}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {project.campaignCreative && (
            <>
              <h2 className="text-2xl font-bold mb-6">Campaign Creative</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {project.campaignCreative.map((item, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Features or Campaign Elements */}
          {project.features &&
            project.features.length > 0 &&
            !project.campaignElements && (
              <>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {project.features.map((feature, index) => (
                    <div key={index} className="bg-white/5 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

          {project.campaignElements && (
            <>
              <h2 className="text-2xl font-bold mb-6">Campaign Elements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {project.campaignElements.map((element, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">{element.title}</h3>
                    <p className="text-blue-100">{element.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Testimonials */}
          {project.testimonials && (
            <>
              <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {project.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-blue-200 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
