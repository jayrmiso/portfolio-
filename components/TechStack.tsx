import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techData = [
    {
        category: "Frontend & Frameworks",
        skills: ["Next.js", "React", "TypeScript", "HTML5 / CSS3", "Tailwind CSS"],
    },
    {
        category: "Backend & API Engineering",
        skills: ["Node.js", "TypeScript", "RESTful APIs", "Next.js Route Handlers"],
    },
    {
        category: "Databases & Infrastructure",
        skills: ["PostgreSQL", "Relational Databases", "Git / Version Control"],
    },
];

export default function TechStack() {
    return (
        <section className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-200">
                Technical Ecosystem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {techData.map((item, index) => (
                    <Card key={index} className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-semibold text-teal-400">
                                {item.category}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {item.skills.map((skill, sIdx) => (
                                <Badge
                                    key={sIdx}
                                    variant="secondary"
                                    className="bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/50"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}