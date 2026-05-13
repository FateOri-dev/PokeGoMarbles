
    const TYPES = [
      "Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison",
      "Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"
    ];

    const TYPE_ICON = {
      Bug:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="56" rx="22" ry="27" fill="currentColor"/><circle cx="50" cy="25" r="12" fill="currentColor"/><path d="M38 22 C24 9 18 10 12 18 M62 22 C76 9 82 10 88 18" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><path d="M30 52 H14 M70 52 H86 M32 70 H18 M68 70 H82" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
      Dark:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M66 13 A38 38 0 1 0 66 87 A30 30 0 1 1 66 13 Z" fill="currentColor"/></svg>`,
      Dragon:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M25 68 C35 35 61 20 80 25 C64 30 60 43 67 53 C56 48 43 53 37 70 C49 64 60 67 70 77 C53 82 36 80 25 68 Z" fill="currentColor"/><circle cx="61" cy="38" r="4" fill="rgba(0,0,0,.45)"/></svg>`,
      Electric:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M58 6 L24 55 H48 L39 94 L78 40 H53 Z" fill="currentColor"/></svg>`,
      Fairy:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L61 38 L94 50 L61 62 L50 94 L39 62 L6 50 L39 38 Z" fill="currentColor"/><circle cx="50" cy="50" r="9" fill="rgba(0,0,0,.24)"/></svg>`,
      Fighting:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M26 34 C26 25 38 25 38 34 V29 C38 20 50 20 50 29 V32 C50 23 62 23 62 32 V38 C62 30 74 31 74 40 V58 C74 76 62 87 45 87 C31 87 22 78 22 65 V47 C22 39 34 39 34 47 V55 H26 Z" fill="currentColor"/></svg>`,
      Fire:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 94 C31 84 21 69 27 51 C32 35 47 31 45 8 C62 24 70 37 65 51 C74 47 79 41 80 32 C91 51 87 78 67 91 C61 95 54 96 50 94 Z" fill="currentColor"/></svg>`,
      Flying:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M14 60 C41 20 70 13 91 18 C69 28 56 42 48 57 C62 52 74 50 84 53 C63 62 49 72 36 84 C39 72 44 63 51 55 C38 61 26 63 14 60 Z" fill="currentColor"/></svg>`,
      Ghost:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M20 82 V43 C20 23 33 11 50 11 C67 11 80 23 80 43 V82 L68 73 L58 83 L50 74 L41 83 L31 73 Z" fill="currentColor"/><circle cx="39" cy="43" r="6" fill="rgba(0,0,0,.42)"/><circle cx="61" cy="43" r="6" fill="rgba(0,0,0,.42)"/></svg>`,
      Grass:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M17 62 C28 20 67 12 88 16 C83 43 68 81 27 78 C46 67 62 51 76 28 C59 48 42 61 17 62 Z" fill="currentColor"/></svg>`,
      Ground:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M16 76 L37 25 H63 L84 76 Z M42 36 L34 65 H66 L58 36 Z" fill="currentColor" fill-rule="evenodd"/></svg>`,
      Ice:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 8 V92 M15 29 L85 71 M15 71 L85 29 M50 8 L40 22 M50 8 L60 22 M50 92 L40 78 M50 92 L60 78 M15 29 L33 31 M15 29 L24 45 M85 71 L67 69 M85 71 L76 55 M15 71 L24 55 M15 71 L33 69 M85 29 L76 45 M85 29 L67 31" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      Normal:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="14"/></svg>`,
      Poison:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M25 78 C19 67 22 51 30 38 C36 24 43 15 50 15 C57 15 64 24 70 38 C78 51 81 67 75 78 C63 71 37 71 25 78 Z" fill="currentColor"/><circle cx="40" cy="48" r="6" fill="rgba(0,0,0,.42)"/><circle cx="60" cy="48" r="6" fill="rgba(0,0,0,.42)"/></svg>`,
      Psychic:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M76 51 C76 69 60 82 43 76 C29 71 22 57 27 44 C32 30 47 25 58 32 C68 38 69 51 61 58 C54 64 43 62 40 53 C37 45 44 38 52 40" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/></svg>`,
      Rock:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M18 62 L39 22 L75 17 L88 52 L60 83 L25 80 Z M39 22 L47 54 L75 17 M47 54 L60 83" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      Steel:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 10 L84 30 V70 L50 90 L16 70 V30 Z M50 34 L64 42 V58 L50 66 L36 58 V42 Z" fill="currentColor" fill-rule="evenodd"/></svg>`,
      Water:`<svg class="type-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 7 C68 32 80 50 80 65 C80 82 67 94 50 94 C33 94 20 82 20 65 C20 50 32 32 50 7 Z" fill="currentColor"/></svg>`
    };

    const COLORS = {
      Normal:"#A8A77A", Fire:"#EE8130", Water:"#6390F0", Electric:"#F7D02C",
      Grass:"#7AC74C", Ice:"#96D9D6", Fighting:"#C22E28", Poison:"#A33EA1",
      Ground:"#E2BF65", Flying:"#A98FF3", Psychic:"#F95587", Bug:"#A6B91A",
      Rock:"#B6A136", Ghost:"#735797", Dragon:"#6F35FC", Dark:"#705746",
      Steel:"#B7B7CE", Fairy:"#D685AD"
    };

    const DARK_TEXT = new Set(["Normal","Electric","Grass","Ice","Ground","Flying","Bug","Rock","Steel","Fairy"]);

    const EFFECT = { super:1.6, resist:0.625, immune:0.390625 };

    const CHART = {
      Normal: { Rock:.5, Ghost:0, Steel:.5 },
      Fire: { Fire:.5, Water:.5, Grass:2, Ice:2, Bug:2, Rock:.5, Dragon:.5, Steel:2 },
      Water: { Fire:2, Water:.5, Grass:.5, Ground:2, Rock:2, Dragon:.5 },
      Electric: { Water:2, Electric:.5, Grass:.5, Ground:0, Flying:2, Dragon:.5 },
      Grass: { Fire:.5, Water:2, Grass:.5, Poison:.5, Ground:2, Flying:.5, Bug:.5, Rock:2, Dragon:.5, Steel:.5 },
      Ice: { Fire:.5, Water:.5, Grass:2, Ice:.5, Ground:2, Flying:2, Dragon:2, Steel:.5 },
      Fighting: { Normal:2, Ice:2, Poison:.5, Flying:.5, Psychic:.5, Bug:.5, Rock:2, Ghost:0, Dark:2, Steel:2, Fairy:.5 },
      Poison: { Grass:2, Poison:.5, Ground:.5, Rock:.5, Ghost:.5, Steel:0, Fairy:2 },
      Ground: { Fire:2, Electric:2, Grass:.5, Poison:2, Flying:0, Bug:.5, Rock:2, Steel:2 },
      Flying: { Electric:.5, Grass:2, Fighting:2, Bug:2, Rock:.5, Steel:.5 },
      Psychic: { Fighting:2, Poison:2, Psychic:.5, Dark:0, Steel:.5 },
      Bug: { Fire:.5, Grass:2, Fighting:.5, Poison:.5, Flying:.5, Psychic:2, Ghost:.5, Dark:2, Steel:.5, Fairy:.5 },
      Rock: { Fire:2, Ice:2, Fighting:.5, Ground:.5, Flying:2, Bug:2, Steel:.5 },
      Ghost: { Normal:0, Psychic:2, Ghost:2, Dark:.5 },
      Dragon: { Dragon:2, Steel:.5, Fairy:0 },
      Dark: { Fighting:.5, Psychic:2, Ghost:2, Dark:.5, Fairy:.5 },
      Steel: { Fire:.5, Water:.5, Electric:.5, Ice:2, Rock:2, Steel:.5, Fairy:2 },
      Fairy: { Fire:.5, Fighting:2, Poison:.5, Dragon:2, Dark:2, Steel:.5 }
    };

    const $ = s => document.querySelector(s);
    const $$ = s => Array.from(document.querySelectorAll(s));
    const cls = type => type.toLowerCase();

    let team = loadTeam() || [
      { type1:"Water", type2:null, quick:"Water", charged:"Ice" },
      { type1:"Fire", type2:"Flying", quick:"Fire", charged:"Flying" }
    ];

    let activeSocket = null;
    let details = new Map();
    let detailCounter = 0;
    let toastTimer = null;
    let selectedMember = null;

    // Physics hopper state.
    const canvas = $("#hopperCanvas");
    const ctx = canvas.getContext("2d");
    const DPR = () => Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, R = 19;
    let marbles = [];
    let marbleId = 0;
    let dragging = null;
    let lastT = performance.now();
    const GOAL_PER_TYPE = 3;

    function resizeCanvas(){
      const rect = canvas.getBoundingClientRect();
      W = Math.max(280, rect.width);
      H = Math.max(150, rect.height);
      const dpr = DPR();
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = W < 420 ? 17 : 19;
      refillHopper(true);
    }

    function makeMarble(type, x=null, y=null){
      return {
        id: ++marbleId,
        type,
        x: x ?? (R + Math.random() * (W - 2*R)),
        y: y ?? (-R - Math.random() * H * 0.45),
        vx: (Math.random() - .5) * 2,
        vy: Math.random() * 1.2,
        r: R,
        grabbed: false
      };
    }

    function refillHopper(reset=false){
      if(reset) marbles = [];
      for(const type of TYPES){
        const have = marbles.filter(m => m.type === type && !m.grabbed).length;
        for(let i=have; i<GOAL_PER_TYPE; i++){
          marbles.push(makeMarble(type));
        }
      }
    }

    function physicsStep(dt){
      dt = Math.min(dt, 0.026);
      const substeps = 2;
      const h = dt / substeps;
      const gravity = 620;
      const bottom = H - 22;
      const wallBounce = 0.05;
      const settleSpeed = 7;

      for(let step=0; step<substeps; step++){
        for(const m of marbles){
          if(m.grabbed) continue;
          m.vy += gravity * h;
          m.x += m.vx * h;
          m.y += m.vy * h;
          m.vx *= 0.988;
          m.vy *= 0.992;

          if(m.x < m.r){ m.x = m.r; m.vx = Math.abs(m.vx) * wallBounce; }
          if(m.x > W - m.r){ m.x = W - m.r; m.vx = -Math.abs(m.vx) * wallBounce; }
          if(m.y > bottom - m.r){
            m.y = bottom - m.r;
            if(Math.abs(m.vy) < 65) m.vy = 0;
            else m.vy = -Math.abs(m.vy) * 0.06;
            m.vx *= 0.82;
          }
          if(m.y < -H){ m.y = -m.r; m.vy = Math.abs(m.vy); }
        }

        // Several position-solver passes reduce clipping and jitter in the dense hopper.
        for(let iter=0; iter<7; iter++){
          for(let i=0; i<marbles.length; i++){
            const a = marbles[i];
            if(a.grabbed) continue;
            for(let j=i+1; j<marbles.length; j++){
              const b = marbles[j];
              if(b.grabbed) continue;
              let dx = b.x - a.x;
              let dy = b.y - a.y;
              let dist2 = dx*dx + dy*dy;
              const minD = a.r + b.r + 0.2;
              if(dist2 === 0){
                dx = (Math.random() - .5) * 0.01;
                dy = (Math.random() - .5) * 0.01;
                dist2 = dx*dx + dy*dy;
              }
              if(dist2 < minD*minD){
                const dist = Math.sqrt(dist2);
                const nx = dx / dist;
                const ny = dy / dist;
                const overlap = minD - dist;
                a.x -= nx * overlap * .5;
                a.y -= ny * overlap * .5;
                b.x += nx * overlap * .5;
                b.y += ny * overlap * .5;

                const rvx = b.vx - a.vx;
                const rvy = b.vy - a.vy;
                const rel = rvx * nx + rvy * ny;
                if(rel < 0){
                  const impulse = -(1 + 0.04) * rel / 2;
                  a.vx -= impulse * nx;
                  a.vy -= impulse * ny;
                  b.vx += impulse * nx;
                  b.vy += impulse * ny;
                }
              }
            }
          }

          for(const m of marbles){
            if(m.grabbed) continue;
            if(m.x < m.r) m.x = m.r;
            if(m.x > W - m.r) m.x = W - m.r;
            if(m.y > bottom - m.r) m.y = bottom - m.r;
          }
        }

        for(const m of marbles){
          if(m.grabbed) continue;
          if(Math.abs(m.vx) < settleSpeed) m.vx = 0;
          if(Math.abs(m.vy) < settleSpeed && m.y > bottom - m.r - 2) m.vy = 0;
        }
      }
    }

    function drawTypeIcon(ctx, type, r){
      ctx.save();
      ctx.scale(r / 50, r / 50);
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "#fff";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 7;

      function path(points){
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for(let i=1;i<points.length;i++) ctx.lineTo(points[i][0], points[i][1]);
        ctx.closePath();
        ctx.fill();
      }

      switch(type){
        case "Normal":
          ctx.beginPath(); ctx.arc(0,0,22,0,Math.PI*2); ctx.lineWidth=11; ctx.stroke(); break;
        case "Fire":
          ctx.beginPath(); ctx.moveTo(0,42); ctx.bezierCurveTo(-20,31,-28,9,-13,-10); ctx.bezierCurveTo(-4,-22,-3,-32,-8,-45); ctx.bezierCurveTo(15,-27,27,-10,18,7); ctx.bezierCurveTo(29,2,34,-8,35,-18); ctx.bezierCurveTo(48,10,35,34,11,43); ctx.bezierCurveTo(6,45,1,45,0,42); ctx.fill(); break;
        case "Water":
          ctx.beginPath(); ctx.moveTo(0,-44); ctx.bezierCurveTo(21,-15,30,4,30,19); ctx.bezierCurveTo(30,36,17,47,0,47); ctx.bezierCurveTo(-17,47,-30,36,-30,19); ctx.bezierCurveTo(-30,4,-21,-15,0,-44); ctx.fill(); break;
        case "Electric":
          path([[8,-46],[-24,5],[-2,5],[-13,46],[28,-12],[4,-12]]); break;
        case "Grass":
          ctx.beginPath(); ctx.moveTo(-35,12); ctx.bezierCurveTo(-18,-35,20,-42,40,-37); ctx.bezierCurveTo(35,-5,13,34,-31,31); ctx.bezierCurveTo(-9,20,14,0,29,-25); ctx.bezierCurveTo(6,2,-13,12,-35,12); ctx.fill(); break;
        case "Ice":
          ctx.lineWidth=7; [[0,-42,0,42],[-35,-20,35,20],[-35,20,35,-20]].forEach(l=>{ctx.beginPath();ctx.moveTo(l[0],l[1]);ctx.lineTo(l[2],l[3]);ctx.stroke();}); break;
        case "Fighting":
          ctx.beginPath(); ctx.moveTo(-25,-10); ctx.bezierCurveTo(-25,-23,-12,-23,-12,-10); ctx.lineTo(-12,-19); ctx.bezierCurveTo(-12,-32,2,-32,2,-19); ctx.lineTo(2,-14); ctx.bezierCurveTo(2,-27,16,-27,16,-14); ctx.lineTo(16,-6); ctx.bezierCurveTo(18,-18,31,-16,31,-3); ctx.lineTo(31,18); ctx.bezierCurveTo(31,38,16,47,-3,47); ctx.bezierCurveTo(-20,47,-32,35,-32,18); ctx.lineTo(-32,-2); ctx.bezierCurveTo(-32,-14,-19,-14,-19,-2); ctx.lineTo(-19,9); ctx.lineTo(-25,9); ctx.closePath(); ctx.fill(); break;
        case "Poison":
          ctx.beginPath(); ctx.moveTo(-30,34); ctx.bezierCurveTo(-41,9,-24,-35,0,-35); ctx.bezierCurveTo(24,-35,41,9,30,34); ctx.bezierCurveTo(13,25,-13,25,-30,34); ctx.fill(); ctx.fillStyle="rgba(0,0,0,.38)"; ctx.beginPath(); ctx.arc(-10,0,5,0,Math.PI*2); ctx.arc(10,0,5,0,Math.PI*2); ctx.fill(); break;
        case "Ground":
          path([[-36,34],[-13,-33],[13,-33],[36,34]]); ctx.fillStyle=COLORS[type]; path([[-11,-18],[-23,23],[23,23],[11,-18]]); break;
        case "Flying":
          ctx.beginPath(); ctx.moveTo(-40,10); ctx.bezierCurveTo(-12,-35,20,-42,42,-36); ctx.bezierCurveTo(20,-25,5,-6,-3,10); ctx.bezierCurveTo(14,4,28,2,38,5); ctx.bezierCurveTo(12,15,-3,27,-21,39); ctx.bezierCurveTo(-17,25,-10,15,-1,7); ctx.bezierCurveTo(-15,13,-28,15,-40,10); ctx.fill(); break;
        case "Psychic":
          ctx.lineWidth=8; ctx.beginPath(); ctx.moveTo(28,1); ctx.bezierCurveTo(28,26,2,38,-18,26); ctx.bezierCurveTo(-38,14,-34,-16,-9,-25); ctx.bezierCurveTo(10,-32,27,-16,19,3); ctx.bezierCurveTo(12,19,-12,17,-11,0); ctx.bezierCurveTo(-10,-10,1,-14,8,-8); ctx.stroke(); break;
        case "Bug":
          ctx.beginPath(); ctx.ellipse(0,9,21,27,0,0,Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(0,-25,12,0,Math.PI*2); ctx.fill(); ctx.lineWidth=7; [[-10,-30,-28,-45],[10,-30,28,-45],[-22,4,-42,2],[22,4,42,2],[-19,22,-36,32],[19,22,36,32]].forEach(l=>{ctx.beginPath();ctx.moveTo(l[0],l[1]);ctx.lineTo(l[2],l[3]);ctx.stroke();}); break;
        case "Rock":
          ctx.lineWidth=8; ctx.beginPath(); ctx.moveTo(-34,10); ctx.lineTo(-12,-33); ctx.lineTo(25,-39); ctx.lineTo(39,0); ctx.lineTo(10,36); ctx.lineTo(-27,33); ctx.closePath(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-12,-33); ctx.lineTo(-2,4); ctx.lineTo(25,-39); ctx.moveTo(-2,4); ctx.lineTo(10,36); ctx.stroke(); break;
        case "Ghost":
          ctx.beginPath(); ctx.moveTo(-30,37); ctx.lineTo(-30,-8); ctx.bezierCurveTo(-30,-31,-16,-43,0,-43); ctx.bezierCurveTo(16,-43,30,-31,30,-8); ctx.lineTo(30,37); ctx.lineTo(18,28); ctx.lineTo(8,38); ctx.lineTo(0,29); ctx.lineTo(-9,38); ctx.lineTo(-19,28); ctx.closePath(); ctx.fill(); ctx.fillStyle="rgba(0,0,0,.38)"; ctx.beginPath(); ctx.arc(-10,-7,5,0,Math.PI*2); ctx.arc(10,-7,5,0,Math.PI*2); ctx.fill(); break;
        case "Dragon":
          ctx.beginPath(); ctx.moveTo(-28,22); ctx.bezierCurveTo(-14,-20,12,-34,33,-27); ctx.bezierCurveTo(15,-22,11,-7,19,4); ctx.bezierCurveTo(5,-2,-11,4,-18,27); ctx.bezierCurveTo(-5,19,12,22,24,34); ctx.bezierCurveTo(3,42,-18,38,-28,22); ctx.fill(); ctx.fillStyle="rgba(0,0,0,.38)"; ctx.beginPath(); ctx.arc(12,-15,4,0,Math.PI*2); ctx.fill(); break;
        case "Dark":
          ctx.beginPath(); ctx.arc(3,0,34,0,Math.PI*2); ctx.fill(); ctx.fillStyle=COLORS[type]; ctx.beginPath(); ctx.arc(17,0,28,0,Math.PI*2); ctx.fill(); break;
        case "Steel":
          path([[0,-40],[34,-20],[34,20],[0,40],[-34,20],[-34,-20]]); ctx.fillStyle=COLORS[type]; path([[0,-18],[15,-9],[15,9],[0,18],[-15,9],[-15,-9]]); break;
        case "Fairy":
          path([[0,-43],[11,-12],[43,0],[11,12],[0,43],[-11,12],[-43,0],[-11,-12]]); ctx.fillStyle="rgba(0,0,0,.22)"; ctx.beginPath(); ctx.arc(0,0,8,0,Math.PI*2); ctx.fill(); break;
      }
      ctx.restore();
    }

    function drawMarbleCanvas(m){
      ctx.save();
      ctx.translate(m.x, m.y);

      ctx.beginPath();
      ctx.arc(0, 0, m.r, 0, Math.PI * 2);
      ctx.fillStyle = COLORS[m.type];
      ctx.fill();

      const grad = ctx.createRadialGradient(-m.r*.35, -m.r*.35, m.r*.2, 0, 0, m.r);
      grad.addColorStop(0, "rgba(255,255,255,.36)");
      grad.addColorStop(.45, "rgba(255,255,255,.06)");
      grad.addColorStop(1, "rgba(0,0,0,.32)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, m.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255,255,255,.92)";
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(-m.r*.34, -m.r*.36, m.r*.28, m.r*.18, -0.35, 0, Math.PI*2);
      ctx.fillStyle = "rgba(255,255,255,.42)";
      ctx.fill();

      drawTypeIcon(ctx, m.type, m.r * .62);
      ctx.restore();
    }

    function draw(){
      ctx.clearRect(0,0,W,H);

      // Subtle plinko pins.
      ctx.save();
      ctx.fillStyle = "rgba(255,255,255,.10)";
      for(let row=0; row<3; row++){
        const y = 34 + row*32;
        const offset = row % 2 ? 28 : 0;
        for(let x=26+offset; x<W; x+=56){
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI*2);
          ctx.fill();
        }
      }
      ctx.restore();

      for(const m of marbles) drawMarbleCanvas(m);
      if(dragging && dragging.outside){
        drawMarbleCanvas({ ...dragging, x: dragging.screenX, y: dragging.screenY });
      }
    }

    function loop(now){
      const dt = (now - lastT) / 1000;
      lastT = now;
      physicsStep(dt);
      draw();
      requestAnimationFrame(loop);
    }

    function canvasPoint(e){
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top, rect: r };
    }

    function pickMarble(x,y){
      for(let i=marbles.length-1; i>=0; i--){
        const m = marbles[i];
        const dx = x - m.x, dy = y - m.y;
        if(dx*dx + dy*dy <= m.r*m.r) return m;
      }
      return null;
    }

    function pointerDown(e){
      const p = canvasPoint(e);
      const m = pickMarble(p.x, p.y);
      if(!m) return;
      e.preventDefault();
      canvas.setPointerCapture?.(e.pointerId);
      dragging = m;
      m.grabbed = true;
      m.vx = 0; m.vy = 0;
      m.pointerId = e.pointerId;
      m.screenX = p.x;
      m.screenY = p.y;
      m.outside = false;
    }

    function pointerMove(e){
      if(!dragging || dragging.pointerId !== e.pointerId) return;
      e.preventDefault();
      const p = canvasPoint(e);
      dragging.x = p.x;
      dragging.y = p.y;
      dragging.screenX = p.x;
      dragging.screenY = p.y;
      dragging.outside = p.x < 0 || p.x > W || p.y < 0 || p.y > H;
      $$(".socket.hover").forEach(el => el.classList.remove("hover"));
      const target = socketAt(e.clientX, e.clientY);
      if(target) target.classList.add("hover");
    }

    function pointerUp(e){
      if(!dragging || dragging.pointerId !== e.pointerId) return;
      const target = socketAt(e.clientX, e.clientY);
      const type = dragging.type;

      // Remove the dragged marble from hopper if it lands in a socket.
      if(target){
        marbles = marbles.filter(m => m.id !== dragging.id);
        setSocket(Number(target.dataset.member), target.dataset.field, type);
        refillHopper(false);
      } else {
        dragging.grabbed = false;
        dragging.vx = (Math.random() - .5) * 90;
        dragging.vy = -60;
        if(dragging.x < R) dragging.x = R;
        if(dragging.x > W - R) dragging.x = W - R;
        if(dragging.y < R) dragging.y = R;
      }

      dragging = null;
      $$(".socket.hover").forEach(el => el.classList.remove("hover"));
    }

    function socketAt(x,y){
      return $$(".socket").find(s => {
        const r = s.getBoundingClientRect();
        return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
      });
    }

    function domMarble(type, tiny=false){
      return `<span class="marble-dom ${tiny ? "tiny":""} ${cls(type)}" title="${type}">${TYPE_ICON[type]}</span>`;
    }

    function pokemonGoRelation(rel){
      if(rel === 2) return EFFECT.super;
      if(rel === .5) return EFFECT.resist;
      if(rel === 0) return EFFECT.immune;
      return 1;
    }

    function mult(attackType, defenderTypes){
      const value = defenderTypes.filter(Boolean).reduce((m, defType) => {
        return m * pokemonGoRelation(CHART[attackType]?.[defType] ?? 1);
      }, 1);
      return Math.round(value * 1000000) / 1000000;
    }

    function fmt(v){
      if(v === 2.56) return "2.56×";
      if(v === 1.6) return "1.6×";
      if(v === 1) return "1×";
      if(v === 0.625) return "0.625×";
      if(v === 0.390625) return "0.391×";
      return `${Number(v.toFixed(3))}×`;
    }

    function defTypes(member){ return [member.type1, member.type2].filter(Boolean); }
    function valid(m){ return Boolean(m.type1 && m.quick && m.charged); }
    function activeMembers(){ return team.map((m,i)=>({...m,index:i})).filter(valid); }

    function focusClass(indices){
      if(selectedMember === null) return "";
      return indices.includes(selectedMember) ? "focused" : "dimmed";
    }

    function mini(indices){
      return `<span class="mini-row">${indices.map(i=>`<span class="mini ${i === selectedMember ? "selected" : ""}">M${i+1}</span>`).join("")}</span>`;
    }

    function chip(type, count, indices, detail){
      const id = registerDetail(detail);
      return `<button class="chip ${focusClass(indices)}" data-detail="${id}" data-members="${indices.join(',')}">${domMarble(type)}<span class="badge">${count}</span>${mini(indices)}</button>`;
    }

    function comboChip(combo, label, detail, indices=[]){
      const id = registerDetail(detail);
      return `<button class="chip ${focusClass(indices)}" data-detail="${id}" data-members="${indices.join(',')}">${combo.map(t=>domMarble(t,true)).join("")}<span class="badge">${label}</span>${indices.length ? mini(indices) : ""}</button>`;
    }

    function registerDetail(detail){
      const id = `d${++detailCounter}`;
      details.set(id, detail);
      return id;
    }

    function memberName(m){
      const typePart = `${m.type1 || "?"}${m.type2 ? "/" + m.type2 : ""}`;
      return `M${m.index + 1} (${typePart} | ${m.quick || "?"}/${m.charged || "?"})`;
    }

    function bestAttackInto(member, defenderCombo){
      const q = mult(member.quick, defenderCombo);
      const c = mult(member.charged, defenderCombo);
      if(c > q) return { slot:"charged", type:member.charged, value:c };
      return { slot:"quick", type:member.quick, value:q };
    }

    function allCombos(){
      const combos = TYPES.map(t => [t]);
      for(let i=0;i<TYPES.length;i++){
        for(let j=i+1;j<TYPES.length;j++) combos.push([TYPES[i], TYPES[j]]);
      }
      return combos;
    }

    function socket(i, field, type, label, required, optional){
      return `<button class="socket ${required ? "required" : ""} ${optional ? "optional" : ""} ${required && !type ? "empty" : ""}" data-member="${i}" data-field="${field}">
        ${type ? domMarble(type) : ""}
        <span class="slot-tag">${label}</span>
      </button>`;
    }

    function renderTeam(){
      $("#partyCount").textContent = `${team.length}/6`;
      $("#addBtn").disabled = team.length >= 6;
      const zone = $("#teamZone");
      if(team.length === 0){
        zone.innerHTML = `<div class="empty-note">Tap + to add a party slot.</div>`;
        return;
      }

      zone.innerHTML = team.map((m,i) => `
        <div class="member ${valid(m) ? "" : "invalid"} ${selectedMember === i ? "selected" : ""}" data-member="${i}">
          <div class="member-num">M${i+1}</div>
          <div class="bracket">
            ${socket(i,"type1",m.type1,"T1",true,false)}
            ${socket(i,"type2",m.type2,"T2",false,true)}
            <div class="divider"></div>
            ${socket(i,"quick",m.quick,"Q",true,false)}
            ${socket(i,"charged",m.charged,"C",true,false)}
          </div>
          <button class="delete" data-delete="${i}" aria-label="Remove member">×</button>
        </div>
      `).join("");
    }

    function empty(id, text){
      const el = document.getElementById(id);
      if(!el.children.length) el.innerHTML = `<div class="empty-note">${text}</div>`;
    }

    function renderAnalysis(){
      details = new Map();
      detailCounter = 0;

      const ids = [
        "takeVeryMore","takeMoreGrid","takeWayLess","takeLessGrid",
        "dealMoreGrid","dealVeryMoreCombos","teamPoorInto","attacksResistedBy","hardResistedCombos"
      ];
      ids.forEach(id => document.getElementById(id).innerHTML = "");

      const members = activeMembers();
      if(!members.length){
        ids.forEach(id => document.getElementById(id).innerHTML = `<div class="empty-note">Fill Type 1, Quick, and Charged to activate a slot.</div>`);
        return;
      }

      const takeVery = [];
      const takeMore = [];
      const takeWayLess = [];
      const takeLess = [];

      for(const attackType of TYPES){
        const a = [], b = [], c = [], d = [];
        for(const m of members){
          const value = mult(attackType, defTypes(m));
          if(value >= 2.56) a.push({m,value});
          else if(value > 1) b.push({m,value});
          else if(value <= 0.390625) c.push({m,value});
          else if(value < 1) d.push({m,value});
        }
        if(a.length) takeVery.push({type:attackType, rows:a});
        if(b.length) takeMore.push({type:attackType, rows:b});
        if(c.length) takeWayLess.push({type:attackType, rows:c});
        if(d.length) takeLess.push({type:attackType, rows:d});
      }

      const sortRows = (x,y) => y.rows.length - x.rows.length || x.type.localeCompare(y.type);
      takeVery.sort(sortRows); takeMore.sort(sortRows); takeWayLess.sort(sortRows); takeLess.sort(sortRows);

      $("#takeVeryMore").innerHTML = takeVery.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Take 2.56× from ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong> takes <strong>${fmt(r.value)}</strong> from ${x.type}.`)
      })).join("");
      $("#takeMoreGrid").innerHTML = takeMore.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Take 1.6× from ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong> takes <strong>${fmt(r.value)}</strong> from ${x.type}.`)
      })).join("");
      $("#takeWayLess").innerHTML = takeWayLess.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Take reduced damage from ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong> takes <strong>${fmt(r.value)}</strong> from ${x.type}.`)
      })).join("");
      $("#takeLessGrid").innerHTML = takeLess.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Take 0.625× from ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong> takes <strong>${fmt(r.value)}</strong> from ${x.type}.`)
      })).join("");

      empty("takeVeryMore","No 2.56× incoming weaknesses.");
      empty("takeMoreGrid","No 1.6× incoming weaknesses.");
      empty("takeWayLess","No heavy resistances yet.");
      empty("takeLessGrid","No 0.625× resistances yet.");

      const dealMoreSingle = [];
      const teamPoorSingle = [];
      const attacksResisted = [];

      for(const defenderType of TYPES){
        const strongContrib = [];
        const resistedContrib = [];
        let teamBest = 0;
        let bestRows = [];
        for(const m of members){
          const best = bestAttackInto(m, [defenderType]);
          teamBest = Math.max(teamBest, best.value);
          if(best.value > 1) strongContrib.push({m,best});
          if(best.value < 1) resistedContrib.push({m,best});
        }

        if(strongContrib.length) dealMoreSingle.push({type:defenderType, rows:strongContrib});
        if(resistedContrib.length) attacksResisted.push({type:defenderType, rows:resistedContrib});

        if(teamBest < 1){
          for(const m of members){
            const best = bestAttackInto(m, [defenderType]);
            if(best.value === teamBest) bestRows.push({m,best});
          }
          teamPoorSingle.push({type:defenderType, rows:bestRows, teamBest});
        }
      }

      dealMoreSingle.sort(sortRows);
      attacksResisted.sort(sortRows);
      teamPoorSingle.sort((a,b) => a.teamBest - b.teamBest || a.type.localeCompare(b.type));

      $("#dealMoreGrid").innerHTML = dealMoreSingle.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Deal more to ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong> uses ${r.best.slot} <strong>${r.best.type}</strong> for <strong>${fmt(r.best.value)}</strong> into ${x.type}.`)
      })).join("");

      $("#teamPoorInto").innerHTML = teamPoorSingle.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Team poor into ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong>'s best hit is ${r.best.slot} <strong>${r.best.type}</strong> at <strong>${fmt(r.best.value)}</strong> into ${x.type}.`)
      })).join("");

      $("#attacksResistedBy").innerHTML = attacksResisted.map(x => chip(x.type, x.rows.length, x.rows.map(r=>r.m.index), {
        title:`Attacks resisted by ${x.type}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong>'s best hit is ${r.best.slot} <strong>${r.best.type}</strong> at <strong>${fmt(r.best.value)}</strong> into ${x.type}.`)
      })).join("");

      const veryStrongCombos = [];
      const hardResistedCombos = [];

      for(const combo of allCombos().filter(c => c.length === 2)){
        let strongRows = [];
        let bestValue = 0;
        let bestRows = [];

        for(const m of members){
          const best = bestAttackInto(m, combo);
          if(best.value > bestValue){
            bestValue = best.value;
            bestRows = [{m,best}];
          } else if(best.value === bestValue){
            bestRows.push({m,best});
          }
          if(best.value >= 2.56) strongRows.push({m,best});
        }

        if(strongRows.length) veryStrongCombos.push({combo, rows:strongRows});
        if(bestValue < 1) hardResistedCombos.push({combo, rows:bestRows, bestValue});
      }

      veryStrongCombos.sort((a,b) => b.rows.length - a.rows.length || a.combo.join("").localeCompare(b.combo.join("")));
      hardResistedCombos.sort((a,b) => a.bestValue - b.bestValue || a.combo.join("").localeCompare(b.combo.join("")));

      $("#dealVeryMoreCombos").innerHTML = veryStrongCombos.slice(0,42).map(x => comboChip(x.combo, x.rows.length, {
        title:`Deal 2.56×+ to ${x.combo.join("/")}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong> uses ${r.best.slot} <strong>${r.best.type}</strong> for <strong>${fmt(r.best.value)}</strong>.`)
      }, x.rows.map(r=>r.m.index))).join("");

      if(veryStrongCombos.length > 42){
        $("#dealVeryMoreCombos").innerHTML += `<span class="chip"><span class="badge">+${veryStrongCombos.length - 42}</span></span>`;
      }

      $("#hardResistedCombos").innerHTML = hardResistedCombos.slice(0,42).map(x => comboChip(x.combo, fmt(x.bestValue), {
        title:`Team poor into ${x.combo.join("/")}`,
        rows:x.rows.map(r => `<strong>${memberName(r.m)}</strong>'s best hit is ${r.best.slot} <strong>${r.best.type}</strong> at <strong>${fmt(r.best.value)}</strong>.`)
      }, x.rows.map(r=>r.m.index))).join("");

      if(hardResistedCombos.length > 42){
        $("#hardResistedCombos").innerHTML += `<span class="chip"><span class="badge">+${hardResistedCombos.length - 42}</span></span>`;
      }

      empty("dealMoreGrid","No super-effective single-type coverage yet.");
      empty("dealVeryMoreCombos","No 2.56× dual-type hits yet.");
      empty("teamPoorInto","No single type fully resists your whole active team.");
      empty("attacksResistedBy","No individual attacks are resisted by single types.");
      empty("hardResistedCombos","No dual-type combo fully resists your active team.");
    }

    function render(){
      if(selectedMember !== null && selectedMember >= team.length) selectedMember = null;
      renderTeam();
      renderAnalysis();
      saveTeam();
    }

    function addMember(){
      if(team.length >= 6){ toast("Party full"); return; }
      team.push({ type1:null, type2:null, quick:null, charged:null });
      render();
    }

    function setSocket(memberIndex, field, type){
      const m = team[memberIndex];
      if(!m) return;
      if(field === "type2" && type === m.type1){ toast("Type 2 cannot match Type 1"); return; }
      if(field === "type1" && type === m.type2) m.type2 = null;
      m[field] = type;
      render();
    }

    function clearSocket(memberIndex, field){
      const m = team[memberIndex];
      if(!m) return;
      if(field === "type1"){
        m.type1 = null;
        m.type2 = null;
      } else {
        m[field] = null;
      }
      render();
    }

    function openPicker(socketEl){
      activeSocket = { member:Number(socketEl.dataset.member), field:socketEl.dataset.field };
      $("#pickerTitle").textContent = `Choose ${activeSocket.field}`;
      $("#pickerGrid").innerHTML = TYPES.map(t => `<button class="picker-marble" data-type="${t}">${domMarble(t)}</button>`).join("");
      $("#pickerBackdrop").classList.add("open");
    }

    function closePicker(){
      $("#pickerBackdrop").classList.remove("open");
      activeSocket = null;
    }

    function openDetail(id){
      const detail = details.get(id);
      if(!detail) return;
      $("#detailTitle").textContent = detail.title;
      $("#detailList").innerHTML = detail.rows.map(r => `<div class="detail-item">${r}</div>`).join("");
      $("#detailBackdrop").classList.add("open");
    }

    function closeDetail(){ $("#detailBackdrop").classList.remove("open"); }

    function openShare(){
      $("#teamCode").value = encodeTeam();
      $("#shareBackdrop").classList.add("open");
      setTimeout(() => $("#teamCode").select(), 50);
    }

    function closeShare(){ $("#shareBackdrop").classList.remove("open"); }

    function encodeTeam(){
      return btoa(unescape(encodeURIComponent(JSON.stringify(team))));
    }

    function decodeTeam(code){
      return JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
    }

    function saveTeam(){
      try{ localStorage.setItem("goTypeMarblesV5", JSON.stringify(team)); }catch(e){}
    }

    function loadTeam(){
      try{
        const raw = localStorage.getItem("goTypeMarblesV5") || localStorage.getItem("goTypeMarblesV4") || localStorage.getItem("goTypeMarblesV3") || localStorage.getItem("goTypeMarbleTeam");
        if(!raw) return null;
        const parsed = JSON.parse(raw);
        if(Array.isArray(parsed)) return parsed.slice(0,6);
      }catch(e){}
      return null;
    }

    function toast(text){
      const t = $("#toast");
      t.textContent = text;
      t.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => t.classList.remove("show"), 1400);
    }

    function init(){
      resizeCanvas();
      render();
      requestAnimationFrame(loop);

      window.addEventListener("resize", resizeCanvas);
      canvas.addEventListener("pointerdown", pointerDown, {passive:false});
      canvas.addEventListener("pointermove", pointerMove, {passive:false});
      canvas.addEventListener("pointerup", pointerUp);
      canvas.addEventListener("pointercancel", pointerUp);

      $("#addBtn").addEventListener("click", addMember);
      $("#refillBtn").addEventListener("click", () => { refillHopper(true); toast("Hopper refilled"); });
      $("#shareBtn").addEventListener("click", openShare);

      document.addEventListener("click", e => {
        const memberEl = e.target.closest(".member");
        if(memberEl && !e.target.closest(".socket") && !e.target.closest("[data-delete]")){
          const idx = Number(memberEl.dataset.member);
          selectedMember = selectedMember === idx ? null : idx;
          render();
          toast(selectedMember === null ? "Team view" : `Focused M${idx+1}`);
          return;
        }

        const socketEl = e.target.closest(".socket");
        if(socketEl) openPicker(socketEl);

        const del = e.target.closest("[data-delete]");
        if(del){
          const idx = Number(del.dataset.delete);
          team.splice(idx, 1);
          if(selectedMember === idx) selectedMember = null;
          else if(selectedMember !== null && selectedMember > idx) selectedMember--;
          render();
        }

        const pick = e.target.closest(".picker-marble");
        if(pick && activeSocket){
          setSocket(activeSocket.member, activeSocket.field, pick.dataset.type);
          closePicker();
        }

        const tab = e.target.closest(".tab");
        if(tab){
          $$(".tab").forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          $$(".panel").forEach(p => p.classList.remove("active"));
          document.getElementById(tab.dataset.tab).classList.add("active");
        }

        const detailChip = e.target.closest("[data-detail]");
        if(detailChip) openDetail(detailChip.dataset.detail);
      });

      $("#closePicker").addEventListener("click", closePicker);
      $("#cancelPicker").addEventListener("click", closePicker);
      $("#pickerBackdrop").addEventListener("click", e => { if(e.target.id === "pickerBackdrop") closePicker(); });
      $("#clearSlot").addEventListener("click", () => {
        if(activeSocket){
          clearSocket(activeSocket.member, activeSocket.field);
          closePicker();
        }
      });

      $("#closeDetail").addEventListener("click", closeDetail);
      $("#detailBackdrop").addEventListener("click", e => { if(e.target.id === "detailBackdrop") closeDetail(); });

      $("#closeShare").addEventListener("click", closeShare);
      $("#shareBackdrop").addEventListener("click", e => { if(e.target.id === "shareBackdrop") closeShare(); });
      $("#copyCode").addEventListener("click", async () => {
        $("#teamCode").select();
        try{
          await navigator.clipboard.writeText($("#teamCode").value);
          toast("Copied");
        }catch(e){
          document.execCommand("copy");
          toast("Copied");
        }
      });
      $("#loadCode").addEventListener("click", () => {
        try{
          const parsed = decodeTeam($("#teamCode").value);
          if(!Array.isArray(parsed)) throw new Error("bad");
          team = parsed.slice(0,6).map(m => ({
            type1:TYPES.includes(m.type1) ? m.type1 : null,
            type2:TYPES.includes(m.type2) ? m.type2 : null,
            quick:TYPES.includes(m.quick) ? m.quick : null,
            charged:TYPES.includes(m.charged) ? m.charged : null
          }));
          render();
          closeShare();
          toast("Loaded");
        }catch(e){
          toast("Invalid code");
        }
      });

      if("serviceWorker" in navigator){
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
        });
      }
    }

    init();
  