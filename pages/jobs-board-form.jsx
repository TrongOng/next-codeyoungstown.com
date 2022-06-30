// - referring person
// - job title
// - company name
// - location (remote?)
// - salary range (optional)
// - job listing and/or contact person

import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

// Card design for each company with consulting badge
