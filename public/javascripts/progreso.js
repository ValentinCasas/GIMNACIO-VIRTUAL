// Obtener el elemento canvas y el contexto 2D
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');

// Crear el objeto Chart y definir la configuración del gráfico
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'white',
      pointBorderWidth: 2,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: function(context) {
          // Crear un tooltip personalizado
          const tooltipEl = document.createElement('div');
          tooltipEl.style.background = 'white';
          tooltipEl.style.border = '1px solid gray';
          tooltipEl.style.padding = '10px';
          tooltipEl.style.fontFamily = 'Arial';
          tooltipEl.style.fontSize = '14px';
          tooltipEl.style.fontWeight = 'bold';
          tooltipEl.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';
          tooltipEl.innerHTML = `Ventas: ${context.tooltip.dataPoints[0].raw}`;

          // Posicionar el tooltip en la posición del punto clickeado
          const position = canvas.getBoundingClientRect();
          tooltipEl.style.top = `${position.top + window.pageYOffset + context.tooltip.caretY}px`;
          tooltipEl.style.left = `${position.left + window.pageXOffset + context.tooltip.caretX}px`;

          // Agregar el tooltip al body
          //document.body.appendChild(tooltipEl);
        }
      }
    },
    onClick: function(event, elements) {
      // Remover cualquier tooltip que exista
      const tooltips = document.querySelectorAll('div[data-chart-tooltip]');
      tooltips.forEach(tooltip => tooltip.remove());

      // Obtener el punto clickeado y mostrar un tooltip
      if (elements.length) {
        const index = elements[0].index;
        const datasetIndex = elements[0].datasetIndex;
        const dataset = this.data.datasets[datasetIndex];
        const value = dataset.data[index];
        const x = elements[0].x;
        const y = elements[0].y;

        this.tooltip._active = [{index: index, datasetIndex: datasetIndex}];
        this.tooltip.update(true);

        const tooltipEvent = {
          type: 'mousemove',
          chart: this,
          native: false,
          x: x,
          y: y
        };

        this.tooltip._eventPosition = tooltipEvent;
        this.tooltip._external = this.options.plugins.tooltip.external;
        this.tooltip._options = this.options.plugins.tooltip;
        this.tooltip._dataPoints = dataset.data.map((value, i) => ({y: value, x: this.data.labels[i]}));
        this.tooltip._activeElements = elements;
        this.tooltip._lastActive = [];

        this.update(true);
        
        // Obtener el valor del punto clickeado
        const salesValue = dataset.data[index];

        // Mostrar mensaje en la consola
        console.log(`Ventas de ${dataset.label} en ${this.data.labels[index]}: ${salesValue}`);
      }
    }
  }
});
