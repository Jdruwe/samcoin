export class FidgetSpinner {

  private x: any;
  private y: any;
  private velX: any;
  private velY: any;
  private size: any;
  private angle: number;

  constructor(x, y, velX, velY, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.size = size;
    this.angle = 0;
  }

  draw(ctx, image) {

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.PI / 180 * (this.angle += 5));
    ctx.drawImage(image, -180 / 2, -166 / 2);
    ctx.restore();

  }

  update(width, height) {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}
