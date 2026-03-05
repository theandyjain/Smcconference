import { useEffect, useRef } from 'react';

export function StockMarketAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stock ticker data
    const tickers = [
      { symbol: 'AAPL', price: 178.45, change: 2.3 },
      { symbol: 'GOOGL', price: 142.87, change: -1.2 },
      { symbol: 'MSFT', price: 412.56, change: 3.1 },
      { symbol: 'TSLA', price: 245.32, change: 5.4 },
      { symbol: 'NVDA', price: 498.76, change: 4.2 },
      { symbol: 'META', price: 387.21, change: -0.8 },
    ];

    // Grid lines
    class GridLine {
      x: number;
      y: number;
      width: number;
      height: number;
      opacity: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = Math.random() > 0.5 ? Math.random() * 200 + 100 : 2;
        this.height = this.width === 2 ? Math.random() * 200 + 100 : 2;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.speed = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.opacity = Math.sin(Date.now() * 0.001 * this.speed) * 0.2 + 0.2;
      }

      draw() {
        ctx.strokeStyle = `rgba(0, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
      }
    }

    // Data particles
    class DataParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        const colors = ['rgba(0, 255, 255', 'rgba(138, 43, 226', 'rgba(0, 255, 157'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `${this.color}, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Stock chart lines
    class ChartLine {
      points: { x: number; y: number }[];
      color: string;
      speed: number;
      offset: number;

      constructor() {
        this.points = [];
        this.color = Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.4)' : 'rgba(138, 43, 226, 0.4)';
        this.speed = Math.random() * 2 + 1;
        this.offset = 0;
        
        const startY = Math.random() * canvas.height;
        for (let i = 0; i < 50; i++) {
          this.points.push({
            x: (i * canvas.width) / 50,
            y: startY + (Math.random() - 0.5) * 100,
          });
        }
      }

      update() {
        this.offset += this.speed;
        if (this.offset > canvas.width / 50) {
          this.offset = 0;
          this.points.shift();
          const lastPoint = this.points[this.points.length - 1];
          this.points.push({
            x: lastPoint.x + canvas.width / 50,
            y: lastPoint.y + (Math.random() - 0.5) * 100,
          });
        }
      }

      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        this.points.forEach((point, i) => {
          const x = point.x - this.offset;
          if (i === 0) {
            ctx.moveTo(x, point.y);
          } else {
            ctx.lineTo(x, point.y);
          }
        });
        ctx.stroke();
      }
    }

    // Ticker tape
    class TickerTape {
      x: number;
      y: number;
      data: typeof tickers[0];
      speed: number;

      constructor(index: number) {
        this.x = canvas.width + index * 300;
        this.y = 50 + Math.floor(index / 3) * 100;
        this.data = tickers[index % tickers.length];
        this.speed = 1;
      }

      update() {
        this.x -= this.speed;
        if (this.x < -300) {
          this.x = canvas.width + 100;
        }
      }

      draw() {
        const color = this.data.change >= 0 ? 'rgba(0, 255, 157, 0.6)' : 'rgba(255, 51, 102, 0.6)';
        
        ctx.fillStyle = 'rgba(10, 10, 30, 0.5)';
        ctx.fillRect(this.x - 5, this.y - 20, 150, 35);
        
        ctx.font = '14px monospace';
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.fillText(this.data.symbol, this.x, this.y);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText(`$${this.data.price.toFixed(2)}`, this.x + 60, this.y);
        
        ctx.fillStyle = color;
        ctx.fillText(`${this.data.change > 0 ? '+' : ''}${this.data.change}%`, this.x + 60, this.y + 15);
      }
    }

    const gridLines = Array.from({ length: 20 }, () => new GridLine());
    const particles = Array.from({ length: 100 }, () => new DataParticle());
    const chartLines = Array.from({ length: 5 }, () => new ChartLine());
    const tickerTapes = Array.from({ length: 9 }, (_, i) => new TickerTape(i));

    function animate() {
      ctx.fillStyle = 'rgba(5, 5, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gridLines.forEach((line) => {
        line.update();
        line.draw();
      });

      chartLines.forEach((line) => {
        line.update();
        line.draw();
      });

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      tickerTapes.forEach((tape) => {
        tape.update();
        tape.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #05050f, #0a0a1e)' }}
    />
  );
}
