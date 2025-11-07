"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const PageHeading = ({ data }) => {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    setUrlSegments(pathSegments);
  }, []);
  const textColor = data?.color || '#23343B';
  return (
    <div className="container">
      <h1 className="cs_page_title" style={{color: textColor}}>{data?.title}</h1>
      <ol className="breadcrumb text-capitalize">
        <li className="breadcrumb-item">
          <Link href="/" style={{color: textColor, ':hover': {color: textColor}}}>Home</Link>
        </li>
        {urlSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index < urlSegments.length - 1 ? (
              <Link href={`/${urlSegments.slice(0, index + 1).join("/")}`} style={{color: textColor, ':hover': {color: textColor}}}>
                {segment}
              </Link>
            ) : (
              <span className="active" style={{color: textColor}}>{segment}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PageHeading;
