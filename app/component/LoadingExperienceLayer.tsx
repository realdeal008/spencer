"use client";

import { useEffect } from "react";

export default function LoadingExperienceLayer() {
  useEffect(() => {
    // Dynamically import heavy libs only on client
    let rafId: number | null = null;

    const initThree = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const THREE = (await import("three")) as any;

      const gsapMod = await import("gsap");
      const gsap: any = gsapMod.gsap;

      const stMod = await import("gsap/ScrollTrigger");
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      let scene: any;
      let camera: any;
      let renderer: any;
      let particles: any;
      let mouseX = 0;
      let mouseY = 0;

      const container = document.getElementById("canvas-container");
      if (!container) return;

      // Clean previous canvas if HMR/navigation re-mounts
      container.innerHTML = "";

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create floating particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 200;
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 100;
        posArray[i + 1] = (Math.random() - 0.5) * 100;
        posArray[i + 2] = (Math.random() - 0.5) * 50;

        // Teal and gold colors
        const isTeal = Math.random() > 0.5;
        colorArray[i] = isTeal ? 0.18 : 0.79;
        colorArray[i + 1] = isTeal ? 0.55 : 0.69;
        colorArray[i + 2] = isTeal ? 0.55 : 0.22;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );
      particlesGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colorArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Mouse movement
      document.addEventListener("mousemove", (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        const glow = document.getElementById("cursorGlow");
        if (glow) {
          glow.style.left = event.clientX + "px";
          glow.style.top = event.clientY + "px";
        }
      });

      const animate = () => {
        rafId = requestAnimationFrame(animate);

        if (particles) {
          particles.rotation.x += 0.0005;
          particles.rotation.y += 0.0005;

          // Mouse interaction
          particles.rotation.x += mouseY * 0.0005;
          particles.rotation.y += mouseX * 0.0005;
        }

        renderer.render(scene, camera);
      };

      // Hero Animation
      const animateHero = () => {
        const tl = gsap.timeline();

        tl.to("#heroSubtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })
          .to(
            "#heroTitle",
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
            "-=0.6"
          )
          .to(
            "#heroDesc",
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=0.8"
          )
          .to(
            "#heroCta",
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=0.6"
          )
          .to("#scrollInd", { opacity: 1, duration: 1 }, "-=0.4");
      };

      // Scroll Reveals
      gsap.utils.toArray(".section-reveal").forEach((element: any) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Start render loop
      animate();

      // Hide loader (keep at least 1.5s)
      setTimeout(() => {
        const loader = document.getElementById("loader");
        if (!loader) return;

        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          animateHero();
        }, 500);
      }, 1500);

      // Resize
      const onResize = () => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", onResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", onResize);
        if (rafId) cancelAnimationFrame(rafId);
        try {
          if (renderer) renderer.dispose();
        } catch {
          // ignore
        }
      };
    };

    let cleanup: undefined | (() => void);

    const run = async () => {
      cleanup = await initThree();
    };

    run();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <>
      <div className="loading-screen" id="loader">
        <div className="loader mb-6"></div>
        <h1 className="luxury-text text-3xl text-forest-dark tracking-widest">
          
        XIUPEPTIDESHUB
        </h1>
        <p className="text-sm text-teal-luxe mt-2 tracking-[0.3em] uppercase">
          Loading Experience
        </p>
      </div>

      {/* Custom Cursor Glow */}
      <div className="cursor-glow hidden md:block" id="cursorGlow"></div>

      {/* 3D Background Canvas */}
      <div id="canvas-container" />
    </>
  );
}

