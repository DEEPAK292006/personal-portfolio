"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero3DObject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch (e) {
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const goldPointLight1 = new THREE.PointLight(0xd3a66b, 3.5, 20);
    goldPointLight1.position.set(4, 4, 4);
    scene.add(goldPointLight1);

    const goldPointLight2 = new THREE.PointLight(0xc18b4a, 2, 20);
    goldPointLight2.position.set(-4, -3, 2);
    scene.add(goldPointLight2);

    const rimLight = new THREE.DirectionalLight(0xffeedd, 1.2);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // Main 3D Metallic Object: Nested Icosahedron with Wireframe Halo
    const coreGroup = new THREE.Group();

    // Solid Inner Metallic Gem
    const innerGeometry = new THREE.IcosahedronGeometry(1.4, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1712,
      roughness: 0.25,
      metalness: 0.88,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // Outer Wireframe Cage in Burnished Gold
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.68, 1);
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd3a66b,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.95,
      emissive: 0x5a3f1a,
      emissiveIntensity: 0.3,
    });
    const wireMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    coreGroup.add(wireMesh);

    // Floating Geometric Orbit Ring
    const ringGeometry = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xc18b4a,
      metalness: 0.9,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh);

    scene.add(coreGroup);

    // Ambient Golden Particle Cloud
    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd3a66b,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Tracking Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Object rotation & hovering
      coreGroup.rotation.y = elapsed * 0.25 + mouseX * 1.5;
      coreGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.15 + mouseY * 1.5;
      coreGroup.position.y = Math.sin(elapsed * 0.8) * 0.1;

      wireMesh.rotation.y = -elapsed * 0.15;
      ringMesh.rotation.z = elapsed * 0.1;

      // Particle subtle drifting
      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerGeometry.dispose();
      innerMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[360px] md:min-h-[460px] relative pointer-events-none"
      aria-label="Interactive 3D Metallic Object"
    />
  );
};
