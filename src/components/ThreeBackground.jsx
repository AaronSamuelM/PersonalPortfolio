import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three";
const SECTION_CONFIG = [
  {
    bg: "#e3e6e2",
    objects: [
      { model: "model1", pos: [-3, 2, -2], scale: 0.6, rotation: [0, 0, 0] },
      {
        model: "model2",
        pos: [3, -1, -1],
        scale: 0.01,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model3",
        pos: [-2, -4, -3],
        scale: 0.7,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model4",
        pos: [4, 2, -2],
        scale: 2,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model6",
        pos: [-4, -4, -2],
        scale: 0.5,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model7",
        pos: [4, 0, -3],
        scale: 0.01,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model8",
        pos: [-4, -1, -1],
        scale: 0.3,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model9",
        pos: [1, -3, -2],
        scale: 0.6,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model10",
        pos: [-3, -1, -3],
        scale: 0.2,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model1",
        pos: [3, 3, -1],
        scale: 0.6,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model2",
        pos: [-2, 1, -2],
        scale: 0.01,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model3",
        pos: [1, -1, -3],
        scale: 0.6,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model4",
        pos: [-6, 2, -1],
        scale: 2,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model5",
        pos: [6, -2, -2],
        scale: 4,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model6",
        pos: [0, 2, -3],
        scale: 0.5,
        rotation: [Math.PI / 3, 0, 0],
      },
    ],
  },
  {
    bg: "#e6d27a",
    objects: [
      {
        model: "model2",
        pos: [-2, 1, -2],
        scale: 0.01,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model3",
        pos: [3, 2, -1],
        scale: 0.7,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model4",
        pos: [-3, -2, -3],
        scale: 2,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model5",
        pos: [2, -1, -2],
        scale: 4,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model6",
        pos: [0, 3, -1],
        scale: 0.5,
        rotation: [Math.PI / 4, Math.PI / 4, 0],
      },
      {
        model: "model7",
        pos: [-1, -3, -3],
        scale: 0.01,
        rotation: [0, Math.PI / 6, 0],
      },
      {
        model: "model8",
        pos: [4, 1, -2],
        scale: 0.3,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model9",
        pos: [-4, 0, -1],
        scale: 0.6,
        rotation: [0, 0, Math.PI / 2],
      },
      {
        model: "model10",
        pos: [1, 2, -3],
        scale: 0.2,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model1",
        pos: [-3, -1, -2],
        scale: 0.6,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model2",
        pos: [3, -3, -1],
        scale: 0.01,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model3",
        pos: [-1, 2, -3],
        scale: 0.7,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model4",
        pos: [2, 0, -2],
        scale: 2,
        rotation: [0, 0, Math.PI / 6],
      },
      {
        model: "model5",
        pos: [-4, 3, -1],
        scale: 4,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model6",
        pos: [4, -1, -3],
        scale: 0.5,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model7",
        pos: [0, -2, -2],
        scale: 0.01,
        rotation: [Math.PI / 6, 0, 0],
      },
    ],
  },
  {
    bg: "#e6dfd4",
    objects: [
      { model: "model3", pos: [-3, 3, -1], scale: 0.7, rotation: [0, 0, 0] },
      {
        model: "model4",
        pos: [3, -2, -3],
        scale: 2,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model5",
        pos: [-2, 0, -2],
        scale: 4,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model6",
        pos: [2, 1, -1],
        scale: 0.5,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model7",
        pos: [0, -1, -3],
        scale: 0.01,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model8",
        pos: [-1, 2, -2],
        scale: 0.3,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model9",
        pos: [4, -1, -1],
        scale: 0.6,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model10",
        pos: [-4, 1, -3],
        scale: 0.2,
        rotation: [0, 0, Math.PI / 6],
      },
      {
        model: "model1",
        pos: [1, 3, -2],
        scale: 0.6,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model2",
        pos: [-3, -2, -1],
        scale: 0.01,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model3",
        pos: [3, 0, -3],
        scale: 0.7,
        rotation: [0, Math.PI / 6, 0],
      },
      {
        model: "model4",
        pos: [-2, -3, -2],
        scale: 2,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model5",
        pos: [2, 2, -1],
        scale: 4,
        rotation: [0, 0, Math.PI / 3],
      },
      {
        model: "model6",
        pos: [0, -2, -3],
        scale: 0.5,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model7",
        pos: [-4, 0, -2],
        scale: 0.01,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model8",
        pos: [4, 2, -1],
        scale: 0.3,
        rotation: [0, Math.PI / 4, 0],
      },
    ],
  },
  {
    bg: "#1e252a",
    objects: [
      {
        model: "model4",
        pos: [-2, -1, -2],
        scale: 2,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model5",
        pos: [2, 2, -1],
        scale: 4,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model6",
        pos: [-3, 1, -3],
        scale: 0.5,
        rotation: [0, 0, Math.PI / 6],
      },
      {
        model: "model7",
        pos: [3, -2, -2],
        scale: 0.01,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model9",
        pos: [-1, 3, -3],
        scale: 0.6,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model10",
        pos: [4, 1, -2],
        scale: 0.2,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model1",
        pos: [-4, -2, -1],
        scale: 0.6,
        rotation: [0, Math.PI / 6, 0],
      },
      {
        model: "model2",
        pos: [1, -3, -3],
        scale: 0.01,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model3",
        pos: [3, 3, -2],
        scale: 0.7,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model4",
        pos: [-3, 0, -1],
        scale: 2,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model5",
        pos: [2, -1, -3],
        scale: 4,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model6",
        pos: [0, 2, -2],
        scale: 0.5,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model7",
        pos: [-2, -3, -1],
        scale: 0.01,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model8",
        pos: [4, 0, -3],
        scale: 0.3,
        rotation: [0, 0, Math.PI / 6],
      },
      {
        model: "model9",
        pos: [-4, 2, -2],
        scale: 0.6,
        rotation: [0, Math.PI / 4, 0],
      },
    ],
  },
  {
    bg: "#e1ecf0",
    objects: [
      { model: "model5", pos: [-3, 2, -1], scale: 4, rotation: [0, 0, 0] },
      {
        model: "model6",
        pos: [3, -1, -3],
        scale: 0.5,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model7",
        pos: [-2, -2, -2],
        scale: 0.01,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model8",
        pos: [2, 2, -1],
        scale: 0.3,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model9",
        pos: [0, 1, -3],
        scale: 0.6,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model10",
        pos: [-1, -3, -2],
        scale: 0.2,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model1",
        pos: [4, 0, -1],
        scale: 0.6,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model2",
        pos: [-4, 3, -3],
        scale: 0.01,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model3",
        pos: [1, -1, -2],
        scale: 0.7,
        rotation: [0, Math.PI / 6, 0],
      },
      {
        model: "model4",
        pos: [-3, 1, -1],
        scale: 2,
        rotation: [0, 0, Math.PI / 3],
      },
      {
        model: "model5",
        pos: [3, 3, -3],
        scale: 4,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model6",
        pos: [0, -2, -2],
        scale: 0.5,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model7",
        pos: [-2, 0, -1],
        scale: 0.01,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model8",
        pos: [2, -3, -3],
        scale: 0.3,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model9",
        pos: [4, 2, -2],
        scale: 0.6,
        rotation: [0, 0, Math.PI / 6],
      },
      {
        model: "model10",
        pos: [-4, -1, -1],
        scale: 0.2,
        rotation: [0, Math.PI / 3, 0],
      },
    ],
  },
  {
    bg: "#e6d27a",
    objects: [
      {
        model: "model6",
        pos: [-2, 1, -2],
        scale: 0.5,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model7",
        pos: [2, -1, -1],
        scale: 0.01,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model8",
        pos: [-3, 2, -3],
        scale: 0.3,
        rotation: [0, 0, Math.PI / 6],
      },
      {
        model: "model9",
        pos: [3, 0, -2],
        scale: 0.6,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model10",
        pos: [0, -2, -1],
        scale: 0.2,
        rotation: [Math.PI / 4, Math.PI / 4, 0],
      },
      {
        model: "model1",
        pos: [-4, -1, -3],
        scale: 0.6,
        rotation: [0, Math.PI / 2, 0],
      },
      {
        model: "model2",
        pos: [4, 3, -2],
        scale: 0.01,
        rotation: [Math.PI / 3, 0, 0],
      },
      {
        model: "model3",
        pos: [1, 2, -1],
        scale: 0.7,
        rotation: [0, 0, Math.PI / 4],
      },
      {
        model: "model4",
        pos: [-3, -3, -3],
        scale: 2,
        rotation: [0, Math.PI / 6, 0],
      },
      {
        model: "model5",
        pos: [3, 1, -2],
        scale: 4,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model6",
        pos: [-1, 0, -1],
        scale: 0.5,
        rotation: [0, Math.PI / 4, 0],
      },
      {
        model: "model7",
        pos: [2, 3, -3],
        scale: 0.01,
        rotation: [0, Math.PI / 3, 0],
      },
      {
        model: "model8",
        pos: [0, -3, -2],
        scale: 0.3,
        rotation: [Math.PI / 6, 0, 0],
      },
      {
        model: "model9",
        pos: [-4, 2, -1],
        scale: 0.6,
        rotation: [0, 0, Math.PI / 2],
      },
      {
        model: "model10",
        pos: [4, -2, -3],
        scale: 0.2,
        rotation: [Math.PI / 4, 0, 0],
      },
      {
        model: "model1",
        pos: [-2, -2, -2],
        scale: 0.6,
        rotation: [0, Math.PI / 6, 0],
      },
    ],
  },
];

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const vignetteRef = useRef(null);
  const wallBaseY = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const currentSection = useRef(0);
  const timeRef = useRef(0);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("INITIALIZING...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!mountRef.current) {
        setError("Failed to attach canvas container");
        return;
      }

      loadModels();
    }, 0);

    const loadModels = async () => {
      try {
        console.log("Starting initialization...");
        setLoadingMessage("SETTING UP SCENE...");
        setLoadingProgress(5);

        await new Promise((resolve) => setTimeout(resolve, 100));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          0.1,
          100
        );
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: false,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(SECTION_CONFIG[0].bg, 1);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        if (!mountRef.current) {
          throw new Error("Mount ref became null during initialization");
        }
        mountRef.current.appendChild(renderer.domElement);
        const lineGeometry = new THREE.PlaneGeometry(100, 0.05);
        const lineMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0,
        });
        const transitionLine = new THREE.Mesh(lineGeometry, lineMaterial);
        transitionLine.position.z = -2;
        scene.add(transitionLine);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        const dir1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dir1.position.set(5, 8, 5);
        dir1.castShadow = true;
        dir1.shadow.mapSize.width = 2048;
        dir1.shadow.mapSize.height = 2048;
        scene.add(dir1);

        const dir2 = new THREE.DirectionalLight(0xffffff, 0.3);
        dir2.position.set(-5, -5, -5);
        scene.add(dir2);

        /*const planeGeometry = new THREE.PlaneGeometry(50, 50);
        const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = 0;
        plane.receiveShadow = true;
        scene.add(plane);*/
        const textureLoader = new TextureLoader();
        const wallColor = textureLoader.load("./textures/wall/color.jpg");
        const wallNormal = textureLoader.load("./textures/wall/normal.jpg");
        const wallRoughness = textureLoader.load(
          "./textures/wall/roughness.jpg"
        );
        const wallDisplacement = textureLoader.load(
          "./textures/wall/displacement.jpg"
        );
        [wallColor, wallNormal, wallRoughness, wallDisplacement].forEach(
          (tex) => {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(16, 8);
            tex.anisotropy = 32;
          }
        );
        const wallMaterial = new THREE.MeshStandardMaterial({
          map: wallColor,
          normalMap: wallNormal,
          roughnessMap: wallRoughness,
          displacementMap: wallDisplacement,
          displacementScale: 0.15,
          roughness: 0.9,
          metalness: 0.05,
          color: new THREE.Color(SECTION_CONFIG[0].bg),
        });

        const wallGeometry = new THREE.PlaneGeometry(
          100,
          80,
          256,
          256 
        );

        const wall = new THREE.Mesh(wallGeometry, wallMaterial);

        wall.position.set(0, 0, -4);
        wallBaseY.current = wall.position.y;
        wall.receiveShadow = true;

        scene.add(wall);

        console.log("Scene setup complete");
        setLoadingMessage("CHECKING MODEL FILES...");
        setLoadingProgress(10);

        await new Promise((resolve) => setTimeout(resolve, 100));

        const gltfLoader = new GLTFLoader();
        const objLoader = new OBJLoader();
        const fbxLoader = new FBXLoader();
        const loadedModels = {};

        const modelPaths = {
          model1: { path: "/models/model1.glb", type: "gltf" },
          model2: { path: "/models/model2.glb", type: "gltf" },
          model3: { path: "/models/model3.glb", type: "gltf" },
          model4: { path: "/models/model4.glb", type: "gltf" },
          model5: { path: "/models/model5.glb", type: "gltf" },
          model6: { path: "/models/model6.glb", type: "gltf" },
          model7: { path: "/models/model7.glb", type: "gltf" },
          model8: { path: "/models/model8.glb", type: "gltf" },
          model9: { path: "/models/model9.glb", type: "gltf" },
          model10: { path: "/models/model10.glb", type: "gltf" },
        };

        const modelKeys = Object.keys(modelPaths);

        for (let i = 0; i < modelKeys.length; i++) {
          const key = modelKeys[i];
          const modelInfo = modelPaths[key];
          setLoadingMessage(
            `LOADING ${key.toUpperCase()} (${i + 1}/${modelKeys.length})...`
          );

          try {
            let model;
            if (modelInfo.type === "gltf") {
              const gltf = await new Promise((resolve, reject) => {
                gltfLoader.load(
                  modelInfo.path,
                  (gltf) => {
                    console.log(`✓ Loaded ${key}`);
                    resolve(gltf);
                  },
                  (progress) => {
                    if (progress.total > 0) {
                      const modelProgress = progress.loaded / progress.total;
                      const totalProgress =
                        10 + ((i + modelProgress) / modelKeys.length) * 80;
                      setLoadingProgress(totalProgress);
                    }
                  },
                  (error) => {
                    console.error(`✗ Failed to load ${key}:`, error);
                    reject(
                      new Error(`File not found or invalid: ${modelInfo.path}`)
                    );
                  }
                );
              });
              model = gltf.scene;
            } else if (modelInfo.type === "fbx") {
              model = await new Promise((resolve, reject) => {
                fbxLoader.load(
                  modelInfo.path,
                  (fbx) => {
                    console.log(`✓ Loaded ${key}`);
                    resolve(fbx);
                  },
                  (progress) => {
                    if (progress.total > 0) {
                      const modelProgress = progress.loaded / progress.total;
                      const totalProgress =
                        10 + ((i + modelProgress) / modelKeys.length) * 80;
                      setLoadingProgress(totalProgress);
                    }
                  },
                  (error) => {
                    console.error(`✗ Failed to load ${key}:`, error);
                    reject(
                      new Error(`File not found or invalid: ${modelInfo.path}`)
                    );
                  }
                );
              });
            } else if (modelInfo.type === "obj") {
              model = await new Promise((resolve, reject) => {
                objLoader.load(
                  modelInfo.path,
                  (obj) => {
                    console.log(`✓ Loaded ${key}`);
                    resolve(obj);
                  },
                  (progress) => {
                    if (progress.total > 0) {
                      const modelProgress = progress.loaded / progress.total;
                      const totalProgress =
                        10 + ((i + modelProgress) / modelKeys.length) * 80;
                      setLoadingProgress(totalProgress);
                    }
                  },
                  (error) => {
                    console.error(`✗ Failed to load ${key}:`, error);
                    reject(
                      new Error(`File not found or invalid: ${modelInfo.path}`)
                    );
                  }
                );
              });
            }

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 1 / maxDim;

            model.scale.setScalar(scale);
            model.position.sub(center.multiplyScalar(scale));

            loadedModels[key] = model;

            const completedProgress = 10 + ((i + 1) / modelKeys.length) * 80;
            setLoadingProgress(completedProgress);
          } catch (err) {
            throw new Error(
              `Failed to load ${key}: ${err.message}. Make sure the file exists at public${modelInfo.path}`
            );
          }
        }

        setLoadingMessage("INITIALIZING SCENE...");
        setLoadingProgress(95);

        const sectionGroups = [];
        let targetBgColor = new THREE.Color(SECTION_CONFIG[0].bg);
        const wallTargetColor = new THREE.Color(SECTION_CONFIG[0].bg);
        let currentBgColor = new THREE.Color(SECTION_CONFIG[0].bg);
        let transitionProgress = 0;
        let isTransitioning = false;
        const createSection = (cfg, sectionIdx) => {
          const sectionGroup = new THREE.Group();

          cfg.objects.forEach((obj, objIdx) => {
            const originalModel = loadedModels[obj.model];
            if (!originalModel) {
              throw new Error(`Model ${obj.model} not found in loaded models`);
            }

            const modelClone = originalModel.clone();

            modelClone.traverse((child) => {
              if (child.isMesh) {
                child.castShadow = false;
                child.receiveShadow = false;
                if (child.material) {
                  if (Array.isArray(child.material)) {
                    child.material = child.material.map((mat) => mat.clone());
                  } else {
                    child.material = child.material.clone();
                  }
                }
              }
            });

            modelClone.position.set(obj.pos[0], obj.pos[1], obj.pos[2]);
            modelClone.scale.setScalar(obj.scale);
            modelClone.rotation.set(
              obj.rotation[0],
              obj.rotation[1],
              obj.rotation[2]
            );

            modelClone.userData.initialPos = modelClone.position.clone();
            modelClone.userData.initialScale = modelClone.scale.clone();
            modelClone.userData.initialRot = modelClone.rotation.clone();
            modelClone.userData.objectIndex = objIdx;
            modelClone.userData.velocity = new THREE.Vector3(
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.01
            );
            modelClone.userData.rotationVelocity = new THREE.Vector3(
              (Math.random() - 0.5) * 0.01,
              (Math.random() - 0.5) * 0.01,
              (Math.random() - 0.5) * 0.01
            );

            const box = new THREE.Box3().setFromObject(modelClone);
            const size = box.getSize(new THREE.Vector3());
            modelClone.userData.boundingRadius =
              Math.max(size.x, size.y, size.z) * obj.scale * 0.5;

            sectionGroup.add(modelClone);
          });

          sectionGroup.visible = false;
          sectionGroup.userData.bgColor = new THREE.Color(cfg.bg);
          sectionGroup.userData.opacity = 0;
          return sectionGroup;
        };

        SECTION_CONFIG.forEach((cfg, idx) => {
          const group = createSection(cfg, idx);
          scene.add(group);
          sectionGroups.push(group);
        });

        sectionGroups[0].visible = true;
        sectionGroups[0].userData.opacity = 1;

        setLoadingMessage("COMPLETE");
        setLoadingProgress(100);

        await new Promise((resolve) => setTimeout(resolve, 500));
        setLoading(false);

        const updateAnimation = () => {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          if (maxScroll <= 0) return;

          const normalizedScroll = scrollProgress.current / maxScroll;
          const exactSection = normalizedScroll * SECTION_CONFIG.length;
          const sectionIndex = Math.floor(exactSection);
          const activeIdx = Math.min(
            Math.max(sectionIndex, 0),
            SECTION_CONFIG.length - 1
          );
          const nextIdx = Math.min(activeIdx + 1, SECTION_CONFIG.length - 1);

          const wallTargetY = wallBaseY.current + normalizedScroll * 32;

          wall.position.y += (wallTargetY - wall.position.y) * 1.5;

          transitionProgress = exactSection - sectionIndex;

          if (activeIdx === SECTION_CONFIG.length - 1) {
            transitionProgress = 0;
          }

          const inTransition =
            transitionProgress > 0.1 &&
            transitionProgress < 0.9 &&
            activeIdx < SECTION_CONFIG.length - 1;

          if (inTransition) {
            const lineProgress = (transitionProgress - 0.1) / 0.8;
            transitionLine.material.opacity =
              Math.sin(lineProgress * Math.PI) * 0.6;
            transitionLine.position.y = -8 + 16 * lineProgress;
          } else {
            transitionLine.material.opacity = 0;
          }
          sectionGroups.forEach((group, idx) => {
            let targetOpacity = 0;
            let targetY = 0;
            let shouldBeVisible = false;

            if (idx === activeIdx) {
              shouldBeVisible = true;
              if (
                transitionProgress > 0.1 &&
                activeIdx < SECTION_CONFIG.length - 1
              ) {
                const exitProgress = Math.min(
                  (transitionProgress - 0.1) / 0.8,
                  1
                );
                targetOpacity = 1 - exitProgress;
                targetY = 12 * exitProgress;
              } else {
                targetOpacity = 1;
                targetY = 0;
              }
            } else if (
              idx === nextIdx &&
              activeIdx !== nextIdx &&
              activeIdx < SECTION_CONFIG.length - 1
            ) {
              shouldBeVisible = true;
              if (transitionProgress > 0.1) {
                const enterProgress = Math.min(
                  (transitionProgress - 0.1) / 0.8,
                  1
                );
                targetOpacity = enterProgress;
                targetY = -12 * (1 - enterProgress);
              } else {
                targetOpacity = 0;
                targetY = -12;
              }
            } else {
              shouldBeVisible = false;
              targetOpacity = 0;
              if (idx < activeIdx) {
                targetY = 12; 
              } else {
                targetY = -12; 
              }
            }
            const opacitySpeed = shouldBeVisible ? 0.15 : 0.25;
            const positionSpeed = shouldBeVisible ? 0.15 : 0.25;

            group.userData.opacity +=
              (targetOpacity - group.userData.opacity) * opacitySpeed;
            group.position.y += (targetY - group.position.y) * positionSpeed;

            if (group.userData.opacity < 0.02) {
              group.visible = false;
              group.userData.opacity = 0;
            } else if (shouldBeVisible || group.userData.opacity > 0.02) {
              group.visible = true;
              group.traverse((child) => {
                if (child.isMesh && child.material) {
                  if (Array.isArray(child.material)) {
                    child.material.forEach((mat) => {
                      mat.transparent = true;
                      mat.opacity = group.userData.opacity;
                      mat.depthWrite = group.userData.opacity > 0.95;
                    });
                  } else {
                    child.material.transparent = true;
                    child.material.opacity = group.userData.opacity;
                    child.material.depthWrite = group.userData.opacity > 0.95;
                  }
                }
              });
            }
          });

          if (
            transitionProgress > 0.1 &&
            activeIdx < SECTION_CONFIG.length - 1
          ) {
            const colorProgress = (transitionProgress - 0.1) / 0.8;

            wallTargetColor
              .copy(sectionGroups[activeIdx].userData.bgColor)
              .lerp(sectionGroups[nextIdx].userData.bgColor, colorProgress);
          } else {
            wallTargetColor.copy(sectionGroups[activeIdx].userData.bgColor);
          }

          wall.material.color.lerp(wallTargetColor, 0.08);
          if (
            transitionProgress > 0.1 &&
            activeIdx < SECTION_CONFIG.length - 1
          ) {
            const colorProgress = (transitionProgress - 0.1) / 0.8;
            targetBgColor
              .copy(sectionGroups[activeIdx].userData.bgColor)
              .lerp(sectionGroups[nextIdx].userData.bgColor, colorProgress);
          } else {
            targetBgColor.copy(sectionGroups[activeIdx].userData.bgColor);
          }

          currentBgColor.lerp(targetBgColor, 0.08);
          renderer.setClearColor(currentBgColor, 1);

          currentSection.current = activeIdx;

          sectionGroups.forEach((group) => {
            if (!group.visible) return;

            const models = group.children;

            for (let i = 0; i < models.length; i++) {
              const model = models[i];
              const initial = model.userData.initialPos;
              const initialScale = model.userData.initialScale;
              const initialRot = model.userData.initialRot;
              const objIdx = model.userData.objectIndex;

              if (!initial || !initialScale || !initialRot) continue;

              const timeFactor = timeRef.current * 0.001;
              const objectOffset = objIdx * 0.3;

              const bobSpeed = 0.2 + (objIdx % 5) * 0.01;
              const bobAmount = 0.6;
              const slideSpeed = 0.1 + (objIdx % 4) * 0.01;
              const slideAmount = 0.8;

              const targetX =
                initial.x +
                Math.cos((timeFactor + objectOffset) * slideSpeed) *
                  slideAmount;
              const targetY =
                initial.y +
                Math.sin((timeFactor + objectOffset) * bobSpeed) * bobAmount;
              const targetZ = initial.z;

              model.userData.velocity.x += (targetX - model.position.x) * 0.001;
              model.userData.velocity.y += (targetY - model.position.y) * 0.001;
              model.userData.velocity.z += (targetZ - model.position.z) * 0.001;

              model.userData.velocity.multiplyScalar(0.98);

              model.position.add(model.userData.velocity);

              model.userData.rotationVelocity.multiplyScalar(0.5);
              model.rotation.x += model.userData.rotationVelocity.x;
              model.rotation.y += model.userData.rotationVelocity.y;
              model.rotation.z += model.userData.rotationVelocity.z;

              const baseRotY =
                initialRot.y +
                (scrollProgress.current * 0.001 + timeFactor + objectOffset) *
                  0.5;
              const baseRotX =
                initialRot.x +
                Math.sin(
                  (scrollProgress.current * 0.001 + timeFactor + objectOffset) *
                    0.8
                ) *
                  0.03;
              const baseRotZ =
                initialRot.z +
                Math.cos(
                  (scrollProgress.current * 0.001 + timeFactor + objectOffset) *
                    0.6
                ) *
                  0.02;

              model.rotation.y += (baseRotY - model.rotation.y) * 0.05;
              model.rotation.x += (baseRotX - model.rotation.x) * 0.05;
              model.rotation.z += (baseRotZ - model.rotation.z) * 0.05;

              const pulseSpeed = 0.1 + (objIdx % 3) * 0.01;
              const pulseAmount = 0.12;
              const scalePulse =
                1 +
                Math.sin((timeFactor + objectOffset) * pulseSpeed) *
                  pulseAmount;
              model.scale.setScalar(initialScale.x * scalePulse);

              const bounds = {
                minX: initial.x - 2,
                maxX: initial.x + 2,
                minY: initial.y - 2,
                maxY: initial.y + 2,
                minZ: initial.z - 1,
                maxZ: initial.z + 1,
              };

              if (model.position.x < bounds.minX) {
                model.position.x = bounds.minX;
                model.userData.velocity.x *= -0.7;
              } else if (model.position.x > bounds.maxX) {
                model.position.x = bounds.maxX;
                model.userData.velocity.x *= -0.7;
              }

              if (model.position.y < bounds.minY) {
                model.position.y = bounds.minY;
                model.userData.velocity.y *= -0.7;
              } else if (model.position.y > bounds.maxY) {
                model.position.y = bounds.maxY;
                model.userData.velocity.y *= -0.7;
              }

              if (model.position.z < bounds.minZ) {
                model.position.z = bounds.minZ;
                model.userData.velocity.z *= -0.7;
              } else if (model.position.z > bounds.maxZ) {
                model.position.z = bounds.maxZ;
                model.userData.velocity.z *= -0.7;
              }
            }
          });
        };

        const onScroll = () => {
          scrollProgress.current =
            window.pageYOffset || document.documentElement.scrollTop;
          updateAnimation();
        };

        const onMouseMove = (e) => {
          mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 5;
          mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 5;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("mousemove", onMouseMove);

        let animationId;
        const animate = () => {
          timeRef.current += 16;

          camera.position.x +=
            (mouse.current.x * 0.8 - camera.position.x) * 0.03;
          camera.position.y +=
            (-mouse.current.y * 0.8 - camera.position.y) * 0.03;

          updateAnimation();
          renderer.render(scene, camera);
          animationId = requestAnimationFrame(animate);
        };
        animate();

        const resize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", resize);
      } catch (err) {
        console.error("Model loading error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <div
        ref={vignetteRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            color: "#00ff00",
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              fontSize: "32px",
              marginBottom: "30px",
              letterSpacing: "4px",
            }}
          >
            {loadingMessage}
          </div>
          <div
            style={{
              width: "400px",
              height: "4px",
              backgroundColor: "#222",
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${loadingProgress}%`,
                backgroundColor: "#00ff00",
                transition: "width 0.3s ease",
              }}
            />
          </div>
          <div style={{ fontSize: "18px", color: "#00aa00" }}>
            {Math.round(loadingProgress)}%
          </div>
          <div
            style={{
              marginTop: "40px",
              fontSize: "12px",
              color: "#00aa00",
              animation: "blink 1s infinite",
            }}
          >
            LOADING CUSTOM 3D MODELS...
          </div>
          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0.3; }
            }
          `}</style>
        </div>
      )}

      {error && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            color: "#ff0000",
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            ⚠ MODEL LOADING FAILED
          </div>
          <div
            style={{
              fontSize: "14px",
              maxWidth: "600px",
              textAlign: "center",
              color: "#ff6666",
              lineHeight: "1.5",
              marginBottom: "30px",
            }}
          >
            {error}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#888",
              textAlign: "center",
              lineHeight: "1.8",
            }}
          >
            <div
              style={{
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#aaa",
              }}
            >
              TROUBLESHOOTING:
            </div>
            <div>
              1. Ensure files are in:{" "}
              <span style={{ color: "#00ff00" }}>public/models/</span>
            </div>
            <div>
              2. Supported formats:{" "}
              <span style={{ color: "#00ff00" }}>GLB, GLTF, FBX, OBJ</span>
            </div>
            <div>3. Check browser console for detailed error messages</div>
            <div>4. Verify files are valid 3D model files</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeBackground;
