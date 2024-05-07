function solveQuadratic(a, b, c) {
    const discriminant = b*b - 4*a*c;
    if (discriminant < 0) {
      return 'Корней нет';
    } else if (discriminant === 0) {
      return 'Один корень: ' + (-b / (2*a));
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
      return 'Два корня: x1 = ' + x1 + ', x2 = ' + x2;
    }
  }
module.exports = {solveQuadratic};