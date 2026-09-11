import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, CheckCircle2, AlertTriangle, Phone, RefreshCw, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { CLIENT_DATA } from '../data/clientData';
import { BenefitCalculationResult } from '../types';

export const CalculatorSection: React.FC = () => {
  const [age, setAge] = useState<number>(65);
  const [benefitType, setBenefitType] = useState<string>('bpc-idoso');
  const [incomePerCapita, setIncomePerCapita] = useState<string>('low'); // 'low' (< R$ 353), 'medium' (R$ 353 - R$ 706), 'high' (> R$ 706)
  const [hasCadUnico, setHasCadUnico] = useState<string>('yes');
  const [hasDisability, setHasDisability] = useState<string>('no');
  const [result, setResult] = useState<BenefitCalculationResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    let score = 0;
    const requirementsMet: string[] = [];
    const missingRequirements: string[] = [];
    let isEligible: boolean | 'Análise Necessária' = false;
    let recommendation = '';
    let summaryMessage = '';

    if (benefitType === 'bpc-idoso') {
      if (age >= 65) {
        score += 40;
        requirementsMet.push('Idade mínima de 65 anos atingida');
      } else {
        missingRequirements.push(`Faltam ${65 - age} ano(s) para atingir os 65 anos exigidos`);
      }

      if (incomePerCapita === 'low') {
        score += 40;
        requirementsMet.push('Renda por pessoa da família abaixo de 1/4 do salário mínimo (Critério objetivo preenchido)');
      } else if (incomePerCapita === 'medium') {
        score += 25;
        requirementsMet.push('Renda familiar entre 1/4 e 1/2 salário mínimo (Possibilidade de relativização judicial com a Dra. Aleandra)');
      } else {
        missingRequirements.push('Renda familiar acima de 1/2 salário mínimo (Necessita análise de gastos com medicamentos e fraldas)');
      }

      if (hasCadUnico === 'yes') {
        score += 20;
        requirementsMet.push('Inscrição / Atualização no CadÚnico ativa');
      } else {
        missingRequirements.push('Necessário realizar ou atualizar a Inscrição no CadÚnico do CRAS');
      }

      if (score >= 80) {
        isEligible = true;
        recommendation = 'Altíssima probabilidade de concessão do BPC/LOAS Idoso!';
        summaryMessage = 'Seus critérios básicos atendem à legislação. Recomendamos dar entrada no pedido imediatamente com o acompanhamento da Dra. Aleandra Almeida Ramos para evitar negativas do INSS.';
      } else if (score >= 50) {
        isEligible = 'Análise Necessária';
        recommendation = 'Elegibilidade Viável através de Relativização Judicial da Renda';
        summaryMessage = 'A renda familiar ou documentação exige adequação jurídica. A Dra. Aleandra especializou-se na comprovação judicial de vulnerabilidade social.';
      } else {
        isEligible = false;
        recommendation = 'Requer Análise Especializada do Histórico Familiar';
        summaryMessage = 'Existem requisitos a serem adequados no CadÚnico ou na composição do grupo familiar antes do requerimento.';
      }

    } else if (benefitType === 'bpc-pcd') {
      if (hasDisability === 'yes') {
        score += 45;
        requirementsMet.push('Diagnóstico de impedimento de longo prazo (Deficiência ou doença crônica)');
      } else {
        missingRequirements.push('Necessário comprovar impedimento físico, mental, intelectual ou sensorial de longo prazo');
      }

      if (incomePerCapita === 'low') {
        score += 35;
        requirementsMet.push('Renda familiar per capita abaixo do limite do INSS');
      } else if (incomePerCapita === 'medium') {
        score += 20;
        requirementsMet.push('Renda familiar per capita passível de abatimento judicial de despesas médicas');
      } else {
        missingRequirements.push('Renda familiar requer dedução comprovada de gastos contínuos de saúde');
      }

      if (hasCadUnico === 'yes') {
        score += 20;
        requirementsMet.push('CadÚnico regularizado no CRAS');
      } else {
        missingRequirements.push('Agendar atualização cadastral do CadÚnico no CRAS');
      }

      if (score >= 70) {
        isEligible = true;
        recommendation = 'Elevada probabilidade de concessão do BPC/LOAS Deficiência!';
        summaryMessage = 'Seu caso reúne os requisitos centrais. É fundamental preparar os laudos médicos nos padrões aceitos na Perícia Médica e Social do INSS.';
      } else {
        isEligible = 'Análise Necessária';
        recommendation = 'Perícia Médica e Social Detalhada Necessária';
        summaryMessage = 'Análise aprofundada dos laudos médicos e receita de gastos com saúde é indispensável para construir a prova judicial com a Dra. Aleandra.';
      }

    } else {
      // General Aposentadoria or Auxílio
      score = 75;
      isEligible = 'Análise Necessária';
      recommendation = 'Análise de CNIS & Tempo de Contribuição Necessária';
      summaryMessage = 'Para Aposentadorias e Auxílios, o levantamento exato das contribuições no extrato do CNIS é o passo correto para definir a melhor regra de transição.';
      requirementsMet.push(`Idade informada: ${age} anos`);
      requirementsMet.push('Requer mapeamento de carência e carnes de contribuição do INSS');
    }

    setResult({
      type: benefitType === 'bpc-idoso' ? 'BPC/LOAS' : benefitType === 'bpc-pcd' ? 'BPC/LOAS' : 'Aposentadoria por Idade',
      eligible: isEligible,
      scorePercent: score,
      recommendation,
      keyRequirementsMet: requirementsMet,
      missingRequirements,
      summaryMessage
    });
  };

  const handleReset = () => {
    setResult(null);
  };

  const generateWhatsAppMessage = () => {
    if (!result) return '';
    const text = `Ol%C3%A1%20Dra.%20Aleandra,%20fiz%20o%20Simulador%20no%20seu%20site%20para%20*${encodeURIComponent(result.type)}*:%20
- Idade: ${age} anos
- Diagn%C3%B3stico/Defici%C3%AAncia: ${hasDisability === 'yes' ? 'Sim' : 'N%C3%A3o'}
- Cad%C3%BAnico: ${hasCadUnico === 'yes' ? 'Sim, atualizado' : 'N%C3%A3o'}
- Compatibilidade: ${result.scorePercent}% (${result.recommendation})

Gostaria%20de%20uma%20an%C3%A1lise%20gratuita%20do%20meu%20caso.`;
    return `https://wa.me/${CLIENT_DATA.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="calculator" className="relative py-20 bg-cream-canvas text-[#1F242D] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D49B28]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#D49B28]" />
            <span>Simulador Interativo de Benefícios INSS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F242D]">
            Descubra se Você Tem Direito ao <span className="gold-text-gradient-dark">BPC / LOAS</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Responda 4 perguntas rápidas e receba uma análise preliminar de elegibilidade ao benefício de 1 salário mínimo mensal.
          </p>
        </div>

        {/* Card Form & Result */}
        <div className="rounded-2xl cream-card p-6 sm:p-10 shadow-xl">
          
          {!result ? (
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Age Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#996B12] uppercase tracking-wider">
                    Sua Idade Atual: <span className="text-[#1F242D] text-sm font-bold">{age} anos</span>
                  </label>
                  <input
                    type="range"
                    min={18}
                    max={95}
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#EADBCC] rounded-lg appearance-none cursor-pointer accent-[#D49B28]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                    <span>18 anos</span>
                    <span>65 anos (Marco BPC)</span>
                    <span>95 anos</span>
                  </div>
                </div>

                {/* Benefit Type Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#996B12] uppercase tracking-wider">
                    Tipo de Benefício Desejado:
                  </label>
                  <select
                    value={benefitType}
                    onChange={(e) => setBenefitType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-[#1F242D] font-semibold text-sm focus:border-[#D49B28] focus:outline-none"
                  >
                    <option value="bpc-idoso">BPC/LOAS - Idoso (65 anos ou mais)</option>
                    <option value="bpc-pcd">BPC/LOAS - Pessoa com Deficiência / Doença Crônica</option>
                    <option value="aposentadoria-idade">Aposentadoria por Idade Urbano / Rural</option>
                    <option value="auxilio-doenca">Auxílio-Doença / Invalidez</option>
                  </select>
                </div>

                {/* Income Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#996B12] uppercase tracking-wider">
                    Renda Familiar Mensal (Por pessoa da casa):
                  </label>
                  <select
                    value={incomePerCapita}
                    onChange={(e) => setIncomePerCapita(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-[#1F242D] font-semibold text-sm focus:border-[#D49B28] focus:outline-none"
                  >
                    <option value="low">Até R$ 353,00 por pessoa (1/4 Salário Mínimo)</option>
                    <option value="medium">Entre R$ 353,00 e R$ 706,00 por pessoa</option>
                    <option value="high">Acima de R$ 706,00 por pessoa</option>
                  </select>
                </div>

                {/* CadÚnico Status */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#996B12] uppercase tracking-wider">
                    Possui Inscrição Atualizada no CadÚnico?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setHasCadUnico('yes')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        hasCadUnico === 'yes'
                          ? 'bg-[#FAF0D9] border-[#D49B28] text-[#996B12] shadow-sm'
                          : 'bg-[#FFFFFF] border-[#EADBCC] text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Sim, CadÚnico OK
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasCadUnico('no')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        hasCadUnico === 'no'
                          ? 'bg-[#FAF0D9] border-[#D49B28] text-[#996B12] shadow-sm'
                          : 'bg-[#FFFFFF] border-[#EADBCC] text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Não / Não Sei
                    </button>
                  </div>
                </div>

              </div>

              {/* Disability Checkbox if BPC PCD */}
              {benefitType === 'bpc-pcd' && (
                <div className="p-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 space-y-2">
                  <label className="block text-xs font-bold text-[#996B12] uppercase tracking-wider">
                    Possui laudo de deficiência, autismo ou doença incapacitante?
                  </label>
                  <div className="flex gap-4 text-xs font-semibold text-[#1F242D]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="disability"
                        checked={hasDisability === 'yes'}
                        onChange={() => setHasDisability('yes')}
                        className="accent-[#D49B28]"
                      />
                      <span>Sim, possuo laudos/receitas médicas</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="disability"
                        checked={hasDisability === 'no'}
                        onChange={() => setHasDisability('no')}
                        className="accent-[#D49B28]"
                      />
                      <span>Ainda em investigação</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="animate-shimmer w-full py-4 rounded-xl gold-btn-gradient text-[#1F242D] font-extrabold text-base flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Sparkles className="w-5 h-5 fill-current" />
                  <span>Calcular Minha Elegibilidade Agora</span>
                </button>
              </div>
            </form>
          ) : (
            /* Result Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Status Header */}
              <div className="text-center space-y-3 pb-6 border-b border-[#EADBCC]">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0D9] border border-[#D49B28] text-[#996B12] text-xs font-bold uppercase tracking-wider">
                  <span>Análise Concluída ({result.scorePercent}% de Compatibilidade)</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif-gold font-bold text-[#1F242D]">
                  {result.recommendation}
                </h3>
                
                <p className="text-slate-700 text-sm leading-relaxed max-w-xl mx-auto">
                  {result.summaryMessage}
                </p>
              </div>

              {/* Checklist details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Requirements Met */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Pontos Favoráveis:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-800">
                    {result.keyRequirementsMet.map((item, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Missing or Attention Needed */}
                <div className="p-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#996B12] flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#D49B28]" />
                    Atenção / Adequações Necessárias:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-800">
                    {result.missingRequirements.length > 0 ? (
                      result.missingRequirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-1.5">
                          <span className="text-[#D49B28] font-bold">!</span>
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-600 italic">Nenhum impedimento crítico identificado!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-shimmer w-full sm:flex-1 py-4 rounded-xl gold-btn-gradient text-[#1F242D] font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Enviar Resultado para Dra. Aleandra no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#FAF0D9] border border-[#D49B28]/40 text-[#996B12] font-bold text-sm hover:bg-[#F5E5C4] transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refazer Simulação</span>
                </button>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
