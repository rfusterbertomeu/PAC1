/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
axe.run({
  runOnly: ['wcag2a', 'wcag2aa', 'best-practice']
},).then((results) => {
  // Analitzar els resultats
  if (results.violations.length > 0) {
      console.error('Violations:', results.violations);
  } else {
      console.log('No se encontraron violaciones de accesibilidad.');
  }
});