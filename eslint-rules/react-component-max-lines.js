module.exports = {
  create: function (context) {
    return {
      Program: (node) => {
        const sourceCode = context.getSourceCode();
        const lines = sourceCode.lines;

        if (lines.length > 20) {
          context.report({
            node,
            message: "React component file is longer than 100 lines of code.",
          });
        }
      },
    };
  },
};
