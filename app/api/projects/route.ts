// Import necessary utilities for Next.js API route
import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects, getProjectBySlug } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const slug = searchParams.get("slug");

    if (slug) {
      // Fetch a project by slug
      const project = await getProjectBySlug(slug);
      if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      return NextResponse.json(project);
    }

    // Fetch all projects or featured ones
    const projects =
      featured === "true"
        ? 'hi'
        : await getAllProjects();

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
